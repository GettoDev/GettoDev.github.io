(function(){
'use strict';
const VW=360, VH=640;
const canvas=document.getElementById('gameCanvas');
const ctx=canvas.getContext('2d');
let S=1, OX=0, OY=0;

function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    S=Math.min(canvas.width/VW, canvas.height/VH);
    OX=(canvas.width-VW*S)/2;
    OY=(canvas.height-VH*S)/2;
}
resize();
window.addEventListener('resize',()=>{ resize(); buildStars(); });

function toV(cx,cy){ return {x:(cx-OX)/S, y:(cy-OY)/S}; }

let aCtx=null;
function initAudio(){
    if(aCtx) return;
    aCtx=new(window.AudioContext||window.webkitAudioContext)();
}
function tone(freq,type,dur,vol,fEnd,delay=0){
    if(!aCtx) return;
    try{
        const t=aCtx.currentTime+delay, o=aCtx.createOscillator(), g=aCtx.createGain();
        o.connect(g); g.connect(aCtx.destination);
        o.type=type; o.frequency.setValueAtTime(freq,t);
        if(fEnd!==undefined) o.frequency.exponentialRampToValueAtTime(fEnd,t+dur);
        g.gain.setValueAtTime(vol,t);
        g.gain.exponentialRampToValueAtTime(0.001,t+dur);
        o.start(t); o.stop(t+dur+0.01);
    }catch(e){}
}
const SFX={
    shoot(){ tone(880,'square',.08,.14,220); },
    hit(){ tone(300,'sawtooth',.1,.18,80); },
    explode(){ tone(120,'sawtooth',.35,.26,30); tone(80,'square',.3,.16,20,.04); },
    playerHit(){ tone(440,'sawtooth',.15,.35,55); tone(220,'square',.3,.26,30,.1); },
    powerUp(){ [0,.06,.12,.18].forEach((d,i)=>tone(440*(1+i*.3),'sine',.15,.17,undefined,d)); },
    shield(){ [0,.05,.1].forEach((d,i)=>tone(660*(1+i*.5),'sine',.2,.2,undefined,d)); },
    bossAlarm(){ tone(110,'sawtooth',.4,.36,55); tone(220,'square',.4,.26,110,.2); },
    bossHit(){ tone(500,'square',.1,.26,150); },
    waveClear(){ [0,.08,.16,.24,.32].forEach((d,i)=>tone(330*(1+i*.25),'sine',.2,.2,undefined,d)); },
    laser(){ tone(1200,'sawtooth',.18,.18,200); tone(800,'square',.18,.14,100,.04); },
    bomb(){ tone(60,'sawtooth',.5,.38,20); tone(200,'square',.4,.28,30,.1); },
    menuClick(){ tone(660,'sine',.12,.2,440); },
};

let musicCtx=null;
let musicGain=null;
let musicActive=false;
let currentMelody=0;
let melodyInterval=null;
let noteIndex=0;

const MELODIES=[
    { tempo:160, notes:[[220,4],[262,4],[330,4],[262,4],[220,4],[294,4],[349,4],[294,4],[196,4],[220,4],[262,4],[220,4],[196,4],[247,4],[294,4],[247,4]] },
    { tempo:140, notes:[[330,4],[392,4],[440,4],[392,4],[330,4],[349,4],[392,4],[349,4],[294,4],[330,4],[349,4],[330,4],[294,4],[349,4],[392,4],[349,4]] },
    { tempo:180, notes:[[262,4],[330,4],[392,4],[330,4],[262,4],[294,4],[349,4],[294,4],[220,4],[262,4],[330,4],[262,4],[220,4],[294,4],[349,4],[294,4]] },
    { tempo:150, notes:[[392,4],[440,4],[523,4],[440,4],[392,4],[440,4],[523,4],[440,4],[330,4],[392,4],[440,4],[392,4],[330,4],[392,4],[440,4],[392,4]] },
    { tempo:170, notes:[[220,4],[262,4],[330,4],[392,4],[330,4],[262,4],[220,4],[294,4],[349,4],[392,4],[349,4],[294,4],[220,4],[262,4],[330,4],[262,4]] },
    { tempo:145, notes:[[349,4],[392,4],[440,4],[523,4],[440,4],[392,4],[349,4],[440,4],[523,4],[587,4],[523,4],[440,4],[392,4],[440,4],[523,4],[440,4]] },
    { tempo:155, notes:[[262,4],[294,4],[349,4],[392,4],[349,4],[294,4],[262,4],[330,4],[392,4],[440,4],[392,4],[330,4],[262,4],[294,4],[349,4],[294,4]] },
    { tempo:165, notes:[[440,4],[523,4],[587,4],[523,4],[440,4],[494,4],[587,4],[494,4],[392,4],[440,4],[523,4],[440,4],[392,4],[440,4],[523,4],[440,4]] }
];

function initMusic(){
    if(musicCtx) return;
    musicCtx=new(window.AudioContext||window.webkitAudioContext)();
    musicGain=musicCtx.createGain();
    musicGain.gain.value=0.35;
    musicGain.connect(musicCtx.destination);
}

function playNote(freq,duration){
    if(!musicCtx||!musicActive) return;
    try{
        const osc=musicCtx.createOscillator();
        const env=musicCtx.createGain();
        osc.type='triangle';
        osc.frequency.value=freq;
        osc.connect(env);
        env.connect(musicGain);
        env.gain.setValueAtTime(0.15,musicCtx.currentTime);
        env.gain.exponentialRampToValueAtTime(0.001,musicCtx.currentTime+duration);
        osc.start(musicCtx.currentTime);
        osc.stop(musicCtx.currentTime+duration);
    }catch(e){}
}

function playMelody(){
    if(!musicActive) return;
    const melody=MELODIES[currentMelody];
    const note=melody.notes[noteIndex];
    const freq=note[0];
    const dur=note[1]*60/melody.tempo;
    playNote(freq,dur);
    noteIndex++;
    if(noteIndex>=melody.notes.length){
        noteIndex=0;
        currentMelody=(currentMelody+1)%MELODIES.length;
    }
}

function startMusic(){
    initMusic();
    if(musicActive) return;
    musicActive=true;
    currentMelody=Math.floor(Math.random()*MELODIES.length);
    noteIndex=0;
    if(melodyInterval) clearInterval(melodyInterval);
    const melody=MELODIES[currentMelody];
    melodyInterval=setInterval(playMelody,60/melody.tempo*1000);
}

function stopMusic(){
    musicActive=false;
    if(melodyInterval){
        clearInterval(melodyInterval);
        melodyInterval=null;
    }
}

function restartMusic(){
    stopMusic();
    startMusic();
}

const C={
    CYAN:'#00ffff', PINK:'#ff0066', ORANGE:'#ff6600',
    YELLOW:'#ffff00', PURPLE:'#cc00ff', GREEN:'#00ff88',
    WHITE:'#ffffff', RED:'#ff2222', BLUE:'#4488ff',
    GOLD:'#ffcc00',
};

const IS_MOBILE = navigator.maxTouchPoints>0 || 'ontouchstart' in window;

const MAX_LIVES = 5;
const G={
    state:'menu',
    score:0, hi:parseInt((()=>{try{return localStorage.getItem('dw_hi')||'0';}catch(e){return '0';}})()),
    lives:3, wave:1, isBossWave:false,
};

let victoryT=0;
let victoryShipY=0;
let victoryShipX=VW/2;

let continueTimer=0;
let continueLeft=5;
const CONTINUE_SECS=8;

let player=null, boss=null;
let enemies=[], pBullets=[], eBullets=[], particles=[], powerUps=[], stars=[];
let enterQueue=[], enterTimer=0;
const ENTER_DELAY=120;

const WCOL={NORMAL:C.CYAN,RAPID:C.GREEN,DOUBLE:C.YELLOW,
            TRIPLE:C.ORANGE,LASER:C.PURPLE,BOMB:C.RED,SHIELD:C.BLUE,LIFE:C.GOLD,
            TIME:'#00eeff',FLOWER:'#ff44ff',MISSILE:'#ff8800'};
const WDR=11000;
let curWpn='NORMAL', wTimer=0, wMax=WDR;
let shieldOn=false, shTimer=0;
const SH_DUR=8000;
let timeSlowOn=false, timeSlowTimer=0;
const TIME_DUR=7000;
let flowerOn=false, flowerTimer=0, flowerAngle=0;
const FLOWER_DUR=5000;
let missilesActive=false, missileTimer=0;
const MISSILE_DUR=10000;
let missileShot=0;
let lastDrop=0;
const DROP_CD=3000;

let floats=[];
let bigMsg={txt:'',col:C.ORANGE,life:0,sc:0};
function showMsg(t,c){ bigMsg={txt:t,col:c||C.ORANGE,life:1,sc:.4}; }

function buildStars(){
    stars=[];
    for(let i=0;i<220;i++) stars.push({
        x:Math.random()*VW, y:Math.random()*VH,
        vx:.5+Math.random()*1.6, r:Math.random()*1.4+.2,
        a:Math.random(),
        col:['#aaccff','#ffffff','#ffddaa','#aaffdd'][~~(Math.random()*4)],
    });
}
buildStars();

function drawStars(dt){
    stars.forEach(s=>{
        s.y+=s.vx*dt*.035; if(s.y>VH){s.y=0;s.x=Math.random()*VW;}
        ctx.globalAlpha=s.a*.7; ctx.fillStyle=s.col;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    });
    ctx.globalAlpha=1;
}

function gl(c,b){ ctx.shadowColor=c; ctx.shadowBlur=b; }
function ng(){ ctx.shadowBlur=0; }

function drawGrid(){}

function drawHUD(){
    ctx.fillStyle='rgba(0,0,20,0.55)'; ctx.fillRect(0,0,VW,28);
    gl(C.CYAN,3); ctx.strokeStyle='rgba(0,255,255,.18)'; ctx.lineWidth=.6;
    ctx.beginPath(); ctx.moveTo(0,28); ctx.lineTo(VW,28); ctx.stroke();
    gl(C.CYAN,8); ctx.fillStyle='rgba(0,200,220,.48)'; ctx.font='6px Orbitron'; ctx.textAlign='left';
    ctx.fillText('SCORE',8,10);
    ctx.fillStyle=C.CYAN; ctx.font='bold 13px Orbitron';
    ctx.fillText(String(G.score).padStart(6,'0'),8,24);
    gl(C.YELLOW,4); ctx.fillStyle='rgba(255,200,0,.32)'; ctx.font='6px Orbitron';
    ctx.fillText('HI '+String(G.hi).padStart(6,'0'),82,11);
    ctx.textAlign='center'; gl(C.ORANGE,10);
    ctx.fillStyle='rgba(255,120,0,.45)'; ctx.font='6px Orbitron';
    ctx.fillText('WAVE',VW/2,10);
    ctx.fillStyle=C.ORANGE; ctx.font='bold 14px Orbitron';
    ctx.fillText(String(G.wave).padStart(2,'0'),VW/2,24);
    ctx.textAlign='right'; gl(C.PINK,8);
    ctx.fillStyle='rgba(255,0,100,.55)'; ctx.font='6px Orbitron';
    ctx.fillText('LIVES',VW-8,10);
    ctx.fillStyle=C.PINK; ctx.font='bold 12px Orbitron';
    ctx.fillText(G.lives>0?'♦ '.repeat(G.lives).trim():'--',VW-8,24);
    const BAR_Y=32;
    if(curWpn!=='NORMAL'){
        const wc=WCOL[curWpn]; gl(wc,9); ctx.textAlign='left'; ctx.fillStyle=wc; ctx.font='bold 8px Orbitron';
        ctx.fillText('⚡'+curWpn,8,BAR_Y+8);
        ctx.strokeStyle='rgba(255,255,255,.12)'; ctx.lineWidth=.6;
        ctx.strokeRect(8,BAR_Y+11,72,2.5);
        gl(wc,6); ctx.fillStyle=wc; ctx.fillRect(8,BAR_Y+11,72*Math.max(0,wTimer/wMax),2.5);
    }
    if(shieldOn){
        const sc=shTimer/SH_DUR; gl(C.BLUE,9); ctx.textAlign='right'; ctx.fillStyle=C.BLUE; ctx.font='bold 8px Orbitron';
        ctx.fillText('⬡SH',VW-8,BAR_Y+8);
        ctx.strokeStyle='rgba(68,136,255,.15)'; ctx.lineWidth=.6;
        ctx.strokeRect(VW-80,BAR_Y+11,72,2.5);
        gl(C.BLUE,6); ctx.fillStyle=C.BLUE; ctx.fillRect(VW-80,BAR_Y+11,72*sc,2.5);
    }
    if(missilesActive){
        const mc=missileTimer/MISSILE_DUR; gl('#ff8800',9); ctx.textAlign='center'; ctx.fillStyle='#ff8800'; ctx.font='bold 8px Orbitron';
        ctx.fillText('🚀MSL',VW/2,BAR_Y+8);
        ctx.strokeStyle='rgba(255,136,0,.15)'; ctx.lineWidth=.6;
        ctx.strokeRect(VW/2-36,BAR_Y+11,72,2.5);
        gl('#ff8800',6); ctx.fillStyle='#ff8800'; ctx.fillRect(VW/2-36,BAR_Y+11,72*mc,2.5);
    }
    if(timeSlowOn){
        const tc=timeSlowTimer/TIME_DUR; gl('#00eeff',9); ctx.textAlign='left'; ctx.fillStyle='#00eeff'; ctx.font='bold 8px Orbitron';
        ctx.fillText('⏱TIME',8,BAR_Y+8);
        ctx.strokeStyle='rgba(0,238,255,.15)'; ctx.lineWidth=.6;
        ctx.strokeRect(8,BAR_Y+11,72,2.5);
        gl('#00eeff',6); ctx.fillStyle='#00eeff'; ctx.fillRect(8,BAR_Y+11,72*tc,2.5);
    }
    if(flowerOn){
        const fc=flowerTimer/FLOWER_DUR; gl('#ff44ff',9); ctx.textAlign='right'; ctx.fillStyle='#ff44ff'; ctx.font='bold 8px Orbitron';
        ctx.fillText('✦FLW',VW-8,BAR_Y+8);
        ctx.strokeStyle='rgba(255,68,255,.15)'; ctx.lineWidth=.6;
        ctx.strokeRect(VW-80,BAR_Y+11,72,2.5);
        gl('#ff44ff',6); ctx.fillStyle='#ff44ff'; ctx.fillRect(VW-80,BAR_Y+11,72*fc,2.5);
    }
    if(G.isBossWave&&boss&&boss.alive){
        const pct=boss.hp/boss.maxHp; gl(C.PINK,6);
        ctx.textAlign='left'; ctx.fillStyle=C.PINK; ctx.font='bold 7px Orbitron';
        ctx.fillText('⚠ BOSS '+boss.name,8,43);
        ctx.textAlign='right'; ctx.fillStyle=C.ORANGE; ctx.font='bold 7px Orbitron';
        ctx.fillText(~~(pct*100)+'%',VW-8,43);
        ctx.strokeStyle='rgba(255,255,255,.1)'; ctx.lineWidth=.7;
        ctx.strokeRect(8,45,VW-16,4);
        const gr=ctx.createLinearGradient(8,0,VW-8,0);
        gr.addColorStop(0,C.PINK); gr.addColorStop(1,C.ORANGE);
        gl(C.PINK,8); ctx.fillStyle=gr; ctx.fillRect(8,45,(VW-16)*pct,4);
    }
    ctx.textAlign='center';
    for(let i=floats.length-1;i>=0;i--){
        const f=floats[i]; f.y-=.8; f.life-=.018;
        if(f.life<=0){floats.splice(i,1);continue;}
        gl(f.col,10); ctx.globalAlpha=f.life;
        ctx.fillStyle=f.col; ctx.font=`bold ${f.sz}px Orbitron`;
        ctx.fillText(f.txt,f.x,f.y);
    }
    ctx.globalAlpha=1;
    if(bigMsg.life>0){
        bigMsg.life-=.008;
        if(bigMsg.sc<1.02) bigMsg.sc+=.05; else if(bigMsg.sc>1) bigMsg.sc-=.006;
        ctx.save(); ctx.translate(VW/2,VH*.48); ctx.scale(bigMsg.sc,bigMsg.sc);
        ctx.globalAlpha=Math.min(bigMsg.life*2,1);
        gl(bigMsg.col,22); ctx.fillStyle=bigMsg.col;
        ctx.font='bold 28px Orbitron'; ctx.textAlign='center'; ctx.textBaseline='middle';
        bigMsg.txt.split('\n').forEach((ln,i)=>ctx.fillText(ln,0,i*34-17));
        ctx.restore(); ctx.globalAlpha=1; ctx.textBaseline='alphabetic';
    }
    ng(); ctx.textAlign='left';
}

let menuPulse=0;

function drawMenu(){
    menuPulse+=.03;
    const bg=ctx.createRadialGradient(VW/2,VH*.4,0,VW/2,VH*.4,VW*.9);
    bg.addColorStop(0,'#000a28'); bg.addColorStop(1,'#00000f');
    ctx.fillStyle=bg; ctx.fillRect(0,0,VW,VH);
    drawStars(16);
    const tp=.75+Math.sin(menuPulse)*.25;
    gl(C.GREEN,30*tp); ctx.fillStyle=C.GREEN;
    ctx.font='bold 32px Orbitron'; ctx.textAlign='center';
    ctx.fillText('DELTA',VW/2,VH*.35);
    gl(C.GREEN,30*tp); ctx.font='bold 38px Orbitron'; ctx.fillText('WAVE',VW/2,VH*.50);
    gl(C.WHITE,4); ctx.fillStyle='rgba(255,255,255,.6)';
    ctx.font='bold 12px Orbitron';
    ctx.fillText('TAP TO START',VW/2,VH*.65);
    gl(C.YELLOW,6); ctx.fillStyle='rgba(255,200,0,.6)';
    ctx.font='9px Orbitron'; ctx.textAlign='center';
    ctx.fillText('HI-SCORE  '+String(G.hi).padStart(6,'0'),VW/2,VH*.78);
    gl('#cc0000',12); ctx.fillStyle='#cc2200';
    ctx.font='bold 9px Orbitron'; ctx.textAlign='center';
    ctx.fillText('DELTA.WAVE',VW/2,VH-16);
    ng(); ctx.textAlign='left';
}

const GOBTN={x:VW/2-72,y:VH/2+44,w:144,h:38};
const MENUBTN={x:VW/2-72,y:VH/2+90,w:144,h:38};

function drawGameOver(){
    const bg=ctx.createRadialGradient(VW/2,VH*.4,0,VW/2,VH*.4,VW*.9);
    bg.addColorStop(0,'#140010'); bg.addColorStop(1,'#00000f');
    ctx.fillStyle=bg; ctx.fillRect(0,0,VW,VH);
    drawStars(16);
    menuPulse+=.03;
    const tp=.7+Math.sin(menuPulse)*.3;
    gl(C.PINK,28*tp); ctx.fillStyle=C.PINK;
    ctx.font='bold 48px Orbitron'; ctx.textAlign='center';
    ctx.fillText('GAME',VW/2,VH*.34);
    ctx.fillText('OVER',VW/2,VH*.44);
    gl(C.WHITE,5); ctx.fillStyle='rgba(200,200,255,.7)';
    ctx.font='10px Orbitron';
    ctx.fillText('WAVE '+G.wave+'  •  SCORE '+String(G.score).padStart(6,'0'),VW/2,VH*.52);
    gl(C.WHITE,4); ctx.fillStyle='rgba(255,255,255,.6)';
    ctx.font='bold 12px Orbitron';
    ctx.fillText('TAP TO RETRY',VW/2,VH*.65);
    gl(C.WHITE,4); ctx.fillStyle='rgba(255,255,255,.4)';
    ctx.font='10px Orbitron';
    ctx.fillText('TAP BOTTOM FOR MENU',VW/2,VH*.72);
    gl(C.YELLOW,6); ctx.fillStyle='rgba(255,200,0,.6)';
    ctx.font='9px Orbitron';
    ctx.fillText('HI-SCORE  '+String(G.hi).padStart(6,'0'),VW/2,VH*.78);
    ng(); ctx.textAlign='left';
}

const JZ ={cx:VW/2,cy:VH-65,r:44};
let jActive=false, jDX=0, jDY=0;
let fireTouch=false;
let knobOX=0, knobOY=0;

function drawTouchControls(){
    if(!IS_MOBILE) return;
    gl(C.CYAN,6);
    ctx.strokeStyle='rgba(0,255,255,.20)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.arc(JZ.cx,JZ.cy,JZ.r,0,Math.PI*2); ctx.stroke();
    ctx.fillStyle='rgba(0,255,255,.04)'; ctx.fill();
    const kx=JZ.cx+knobOX, ky=JZ.cy+knobOY;
    gl(C.CYAN,12); ctx.fillStyle='rgba(0,255,255,.35)';
    ctx.beginPath(); ctx.arc(kx,ky,16,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle=C.CYAN; ctx.lineWidth=2;
    ctx.beginPath(); ctx.arc(kx,ky,16,0,Math.PI*2); ctx.stroke();
    gl(C.GREEN,5); ctx.fillStyle='rgba(0,255,136,.45)';
    ctx.font='7px Orbitron'; ctx.textAlign='center';
    ctx.fillText('AUTO',JZ.cx,JZ.cy-JZ.r-6);
    ng(); ctx.textAlign='left';
}

function makePlayer(){ return {x:VW/2,y:VH-80,inv:false,invT:0,canShoot:true,lastShot:0}; }

function drawPlayer(p){
    if(p.inv&&!flowerOn&&Math.floor(p.invT/100)%2===0) return;
    const x=p.x, y=p.y, fl=.6+Math.random()*.8;
    const wc=flowerOn?'#ff44ff':(WCOL[curWpn]||C.CYAN);
    const t=performance.now();
    ctx.save();
    ctx.translate(x,y);
    ctx.scale(0.78,0.78);
    if(flowerOn) ctx.rotate(flowerAngle);
    gl(wc,18*fl); ctx.fillStyle=`rgba(${flowerOn?'200,0,200':'0,80,255'},${.6*fl})`;
    ctx.beginPath(); ctx.moveTo(0,-22); ctx.lineTo(-8,8); ctx.lineTo(0,4); ctx.lineTo(8,8); ctx.closePath(); ctx.fill();
    gl(wc,10*fl); ctx.fillStyle=`rgba(${flowerOn?'180,0,180':'0,40,200'},${.3*fl})`;
    ctx.beginPath(); ctx.moveTo(0,-28); ctx.lineTo(-12,12); ctx.lineTo(0,6); ctx.lineTo(12,12); ctx.closePath(); ctx.fill();
    gl(wc,16); ctx.strokeStyle=wc; ctx.fillStyle=wc+'22'; ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(0,-16);
    ctx.lineTo(-14,0);
    ctx.lineTo(-6,4);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0,-16);
    ctx.lineTo(14,0);
    ctx.lineTo(6,4);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    gl(wc,22); ctx.fillStyle=wc+'18'; ctx.strokeStyle=wc; ctx.lineWidth=2.2;
    ctx.beginPath();
    ctx.moveTo(0,-10);
    ctx.lineTo(-12,6);
    ctx.lineTo(-4,10);
    ctx.lineTo(4,10);
    ctx.lineTo(12,6);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    gl(wc,12); ctx.fillStyle=wc;
    ctx.beginPath(); ctx.arc(-14,0,2.5,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(14,0,2.5,0,Math.PI*2); ctx.fill();
    ctx.restore();
    if(flowerOn){
        const fp=0.6+Math.sin(t*0.012)*0.4;
        gl('rgba(255,68,255,'+(fp*0.5)+')'); ctx.lineWidth=2.5;
        ctx.beginPath(); ctx.arc(x,y,28,0,Math.PI*2); ctx.stroke();
        ctx.fillStyle='rgba(255,68,255,0.05)'; ctx.fill();
    }
    if(timeSlowOn){
        const tp=0.5+Math.sin(t*0.008)*0.5;
        gl('rgba(0,238,255,'+(tp*0.4)+')'); ctx.lineWidth=2;
        ctx.beginPath(); ctx.arc(x,y,24,0,Math.PI*2); ctx.stroke();
    }
    if(shieldOn){
        const sa=0.6+Math.sin(t*0.006)*0.4;
        gl('rgba(68,136,255,'+(sa*0.7)+')'); ctx.lineWidth=2.5;
        ctx.fillStyle='rgba(68,136,255,'+(sa*0.07)+')';
        ctx.beginPath(); ctx.arc(x,y,26,0,Math.PI*2); ctx.fill(); ctx.stroke();
    }
}

function collide(x1,y1,r1,x2,y2,r2){
    const dx=x1-x2, dy=y1-y2;
    return dx*dx+dy*dy<(r1+r2)*(r1+r2);
}

function explode(x,y,col,n=18){
    for(let i=0;i<n;i++){
        const a=Math.random()*Math.PI*2;
        const spd=1.2+Math.random()*3.5;
        particles.push({
            x,y,
            vx:Math.cos(a)*spd,
            vy:Math.sin(a)*spd,
            life:1,
            decay:0.022+Math.random()*0.04,
            r:1.5+Math.random()*3.5,
            col
        });
    }
}

function drawParticles(){
    for(let i=particles.length-1;i>=0;i--){
        const p=particles[i];
        p.life-=p.decay;
        if(p.life<=0){particles.splice(i,1);continue;}
        p.x+=p.vx; p.y+=p.vy; p.vy+=0.04; p.vx*=0.97;
        ctx.globalAlpha=p.life; ctx.fillStyle=p.col;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r*p.life,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
}

function drawBullets(){
    pBullets.forEach(b=>{
        b.trail=b.trail||[];
        b.trail.push({x:b.x,y:b.y});
        if(b.trail.length>10) b.trail.shift();
        b.trail.forEach((pt,ti)=>{
            ctx.globalAlpha=(ti/b.trail.length)*0.4;
            ctx.fillStyle=b.laser?'#cc00ff':'#00ffff';
            ctx.beginPath(); ctx.arc(pt.x,pt.y,b.laser?3.5:1.8,0,Math.PI*2); ctx.fill();
        });
        ctx.globalAlpha=1;
        if(b.laser){
            ctx.fillStyle='#cc00ff';
            ctx.beginPath(); ctx.roundRect(b.x-11,b.y-3.5,22,7,3);
            ctx.fill();
            ctx.fillStyle='#ffffff';
            ctx.beginPath(); ctx.rect(b.x-11,b.y-1.2,22,2.4);
            ctx.fill();
        }else if(b.flower){
            const fp=0.7+Math.sin(performance.now()*0.018+b.x*0.05)*0.3;
            b.trail.forEach((pt,ti)=>{
                const a=ti/b.trail.length;
                ctx.globalAlpha=a*0.5;
                ctx.fillStyle='rgba(255,68,255,'+(a*0.6)+')';
                ctx.beginPath(); ctx.arc(pt.x,pt.y,5*a,0,Math.PI*2); ctx.fill();
            });
            ctx.globalAlpha=1;
            ctx.fillStyle='rgba(255,68,255,'+(fp*0.25)+')';
            ctx.beginPath(); ctx.arc(b.x,b.y,9,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='#ff44ff';
            ctx.beginPath(); ctx.arc(b.x,b.y,6,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='#ffffff';
            ctx.beginPath(); ctx.arc(b.x,b.y,2.5,0,Math.PI*2); ctx.fill();
        }else{
            ctx.fillStyle='#00ffff';
            ctx.beginPath(); ctx.roundRect(b.x-8.5,b.y-2.5,17,5,2.5);
            ctx.fill();
            ctx.fillStyle='#ffffff';
            ctx.beginPath(); ctx.rect(b.x-8.5,b.y-0.8,17,1.6);
            ctx.fill();
        }
    });
    eBullets.forEach(b=>{
        const col=b.type==='boss'?'#cc00ff':'#ff0066';
        const r=b.type==='boss'?6:4.5;
        ctx.fillStyle=col;
        ctx.beginPath(); ctx.arc(b.x,b.y,r,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#ffffff';
        ctx.beginPath(); ctx.arc(b.x,b.y,r*0.38,0,Math.PI*2); ctx.fill();
    });
}

function drawPowerUps(){
    powerUps.forEach(p=>{
        const wc=WCOL[p.type]||C.YELLOW;
        gl(wc,15); ctx.fillStyle=wc;
        ctx.beginPath(); ctx.arc(p.x,p.y,12,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='#ffffff'; ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.arc(p.x,p.y,12,0,Math.PI*2); ctx.stroke();
        gl(wc,8); ctx.fillStyle='#ffffff';
        ctx.font='bold 8px Orbitron'; ctx.textAlign='center'; ctx.textBaseline='middle';
        ctx.fillText(p.type[0],p.x,p.y);
        ctx.textBaseline='alphabetic';
    });
}

function drawEnemy(e){
    const t=e.type;
    const c=ECOLS[t]||C.CYAN;
    const r=ER[t]||14;
    gl(c,10); ctx.fillStyle=c;
    ctx.beginPath(); ctx.arc(e.x,e.y,r,0,Math.PI*2); ctx.fill();
    gl('#ffffff',8); ctx.fillStyle='#ffffff';
    ctx.beginPath(); ctx.arc(e.x,e.y,r*0.3,0,Math.PI*2); ctx.fill();
    if(e.hitFlash>0){
        e.hitFlash--;
        gl('#ffffff',20); ctx.fillStyle='#ffffff';
        ctx.globalAlpha=e.hitFlash/10;
        ctx.beginPath(); ctx.arc(e.x,e.y,r+4,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha=1;
    }
}

const ECOLS=['#00ffff','#ff6600','#ffff00','#cc00ff'];
const EPTS=[100,200,400,800];
const EHP=[1,1,2,2];
const ER=[14,15,17,18];

function drawBoss(b){
    const c=b.col;
    gl(c,15); ctx.fillStyle=c;
    ctx.beginPath(); ctx.arc(b.x,b.y,35,0,Math.PI*2); ctx.fill();
    gl('#ffffff',10); ctx.fillStyle='#ffffff';
    ctx.beginPath(); ctx.arc(b.x,b.y,12,0,Math.PI*2); ctx.fill();
    if(b.hitFlash>0){
        b.hitFlash--;
        gl('#ffffff',25); ctx.fillStyle='#ffffff';
        ctx.globalAlpha=b.hitFlash/10;
        ctx.beginPath(); ctx.arc(b.x,b.y,45,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha=1;
    }
}

function drawVictory(dt){
    const bg=ctx.createRadialGradient(VW/2,VH*.4,0,VW/2,VH*.4,VW*.9);
    bg.addColorStop(0,'#000a28'); bg.addColorStop(1,'#00000f');
    ctx.fillStyle=bg; ctx.fillRect(0,0,VW,VH);
    drawStars(dt);
    victoryT+=dt;
    victoryShipY-=dt*0.02;
    if(victoryShipY<-30) victoryShipY=VH+30;
    const vp=makePlayer();
    vp.x=victoryShipX; vp.y=victoryShipY;
    drawPlayer(vp);
    gl(C.GREEN,20); ctx.fillStyle=C.GREEN;
    ctx.font='bold 32px Orbitron'; ctx.textAlign='center';
    ctx.fillText('VICTORY',VW/2,VH*.4);
    gl(C.WHITE,4); ctx.fillStyle='rgba(255,255,255,.6)';
    ctx.font='10px Orbitron';
    ctx.fillText('WAVE '+G.wave+'  •  SCORE '+String(G.score).padStart(6,'0'),VW/2,VH*.52);
    ng();
}

function drawContinueScreen(){
    const bg=ctx.createRadialGradient(VW/2,VH*.4,0,VW/2,VH*.4,VW*.9);
    bg.addColorStop(0,'#140a00'); bg.addColorStop(1,'#00000f');
    ctx.fillStyle=bg; ctx.fillRect(0,0,VW,VH);
    drawStars(16);
    menuPulse+=.03;
    const tp=0.7+Math.sin(menuPulse)*.3;
    gl(C.YELLOW,28*tp); ctx.fillStyle=C.YELLOW;
    ctx.font='bold 36px Orbitron'; ctx.textAlign='center';
    ctx.fillText('CONTINUE?',VW/2,VH*.22);
    const pct=continueTimer/8000;
    const cx=VW/2, cy=VH*.42, cr=44;
    ctx.strokeStyle='rgba(255,200,0,.15)'; ctx.lineWidth=7;
    ctx.beginPath(); ctx.arc(cx,cy,cr,0,Math.PI*2); ctx.stroke();
    ctx.strokeStyle=C.YELLOW;
    ctx.beginPath(); ctx.arc(cx,cy,cr,-Math.PI/2,-Math.PI/2+Math.PI*2*pct);
    ctx.stroke();
    ctx.fillStyle='#ffffff';
    ctx.font='bold 28px Orbitron'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(Math.ceil(continueTimer/1000),cx,cy);
    ctx.textBaseline='alphabetic';
    gl(C.YELLOW,6); ctx.fillStyle='rgba(255,200,0,.8)';
    ctx.font='bold 11px Orbitron'; ctx.textAlign='center';
    ctx.fillText('CONTINUES REMAINING: '+continueLeft,VW/2,VH*.56);
    gl(C.WHITE,4); ctx.fillStyle='rgba(255,255,255,.6)';
    ctx.font='bold 12px Orbitron';
    ctx.fillText('TAP TO CONTINUE',VW/2,VH*.62);
    gl(C.PINK,4); ctx.fillStyle='rgba(255,80,120,.55)';
    ctx.font='8px Orbitron'; ctx.textAlign='center';
    ctx.fillText('tap elsewhere — game over',VW/2,VH*.82);
    ng(); ctx.textAlign='left';
}

function draw(dt){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='#00000f'; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(OX,OY);
    ctx.scale(S,S);
    if(G.state==='menu'){
        drawMenu();
    } else if(G.state==='victory'){
        drawVictory(dt);
    } else if(G.state==='gameover'){
        drawGameOver();
    } else if(G.state==='continue'){
        drawContinueScreen();
    } else {
        const bg=ctx.createRadialGradient(VW/2,VH*.35,0,VW/2,VH*.35,Math.max(VW,VH)*.8);
        bg.addColorStop(0,'#000a28'); bg.addColorStop(1,'#00000f');
        ctx.fillStyle=bg; ctx.fillRect(0,0,VW,VH);
        drawStars(dt);
        if(G.isBossWave&&boss) drawBoss(boss);
        else enemies.forEach(e=>{if(e.state!=='dead') drawEnemy(e);});
        drawPowerUps();
        if(player) drawPlayer(player);
        drawBullets();
        drawParticles();
        drawHUD();
        drawTouchControls();
    }
    ctx.restore();
}

const KEYS={ArrowUp:0,ArrowDown:1,ArrowLeft:2,ArrowRight:3,Space:4};
let k=[false,false,false,false,false];
let mouseDown=false;
let mx=0, my=0;

window.addEventListener('keydown',e=>{
    const kx=KEYS[e.code];
    if(kx!==undefined){
        if(e.code==='Space') e.preventDefault();
        k[kx]=true;
        if(G.state==='menu'&&k[4]) startGame();
        if(G.state==='gameover'&&k[4]) startGame();
    }
});
window.addEventListener('keyup',e=>{
    const kx=KEYS[e.code];
    if(kx!==undefined) k[kx]=false;
});
window.addEventListener('mousedown',e=>{
    mouseDown=true;
    mx=e.clientX; my=e.clientY;
    if(G.state==='menu') startGame();
    if(G.state==='gameover') startGame();
});
window.addEventListener('mouseup',()=>mouseDown=false);
window.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; });

canvas.addEventListener('touchstart',e=>{
    e.preventDefault();
    const v=toV(e.touches[0].clientX,e.touches[0].clientY);
    if(v.y>VH-120){
        jActive=true;
        knobOX=v.x-JZ.cx;
        knobOY=v.y-JZ.cy;
    }else{
        fireTouch=true;
    }
    if(G.state==='menu') startGame();
    if(G.state==='gameover') startGame();
},{passive:false});
canvas.addEventListener('touchmove',e=>{
    e.preventDefault();
    if(jActive){
        const v=toV(e.touches[0].clientX,e.touches[0].clientY);
        const dx=v.x-JZ.cx, dy=v.y-JZ.cy;
        const d=Math.min(Math.hypot(dx,dy),JZ.r);
        const a=Math.atan2(dy,dx);
        knobOX=Math.cos(a)*d;
        knobOY=Math.sin(a)*d;
        jDX=knobOX/JZ.r;
        jDY=knobOY/JZ.r;
    }
},{passive:false});
canvas.addEventListener('touchend',e=>{
    e.preventDefault();
    jActive=false;
    jDX=0; jDY=0;
    knobOX=0; knobOY=0;
    fireTouch=false;
},{passive:false});

function startGame(){
    SFX.menuClick();
    G.score=0;
    G.lives=MAX_LIVES;
    G.wave=1;
    G.isBossWave=false;
    player=makePlayer();
    enemies=[];
    pBullets=[];
    eBullets=[];
    particles=[];
    powerUps=[];
    boss=null;
    floats=[];
    lastDrop=0;
    bigMsg.life=0;
    curWpn='NORMAL';
    wTimer=0;
    shieldOn=false;
    shTimer=0;
    timeSlowOn=false;
    timeSlowTimer=0;
    flowerOn=false;
    flowerTimer=0;
    flowerAngle=0;
    missilesActive=false;
    missileTimer=0;
    missileShot=0;
    continueLeft=5;
    continueTimer=0;
    buildWave();
    G.state='playing';
    restartMusic();
}

function buildWave(){
    const count=Math.min(8+G.wave*3,28);
    const cols=Math.min(7,3+Math.floor(G.wave/3));
    const rows=Math.ceil(count/cols);
    enemies=[];
    for(let c=0;c<cols;c++){
        for(let r=0;r<rows;r++){
            const idx=c*rows+r;
            if(idx>=count) break;
            const type=r===0&&G.wave>=4?3:r<=1&&G.wave>=3?2:r<=2&&G.wave>=2?1:0;
            const e={
                type,
                idx,
                x:VW/2+(Math.random()-0.5)*VW*0.4,
                y:-40-(idx*25),
                formX:0,
                formY:0,
                state:'entering',
                hp:1+type,
                animT:Math.random()*300,
                phase:Math.random()*Math.PI*2,
                diveTimer:2200+Math.random()*4500,
                fireTimer:900+Math.random()*2000,
                path:null,
                pathT:0
            };
            const slot=formSlot(idx,count,G.wave);
            e.formX=slot.x;
            e.formY=slot.y;
            enemies.push(e);
        }
    }
}

function formSlot(idx,total,wave){
    const cols=Math.min(7,3+Math.floor(wave/3));
    const rows=Math.ceil(total/cols);
    const col=idx%cols;
    const row=Math.floor(idx/cols);
    const xStep=Math.min(50,(VW-20)/cols);
    const yStep=42;
    const startX=(VW-(cols*xStep))/2+xStep/2;
    return {x:startX+col*xStep,y:80+row*yStep};
}

function startDive(e){
    e.state='diving';
    e.pathT=0;
    const sx=e.x, sy=e.y;
    const tx=player?player.x+(Math.random()-0.5)*100:VW/2;
    const ty=VH+40;
    const cp1x=sx+(Math.random()-0.5)*VW*0.3;
    const cp1y=sy+(Math.random()-0.5)*VH*0.4;
    const cp2x=VW*0.25;
    const cp2y=ty+(Math.random()-0.5)*80;
    e.path={sx,sy,cp1x,cp1y,cp2x,cp2y,tx,ty};
}

function bezier(p,t){
    const m=1-t;
    return {
        x:m*m*m*p.sx+3*m*m*t*p.cp1x+3*m*t*t*p.cp2x+t*t*t*p.tx,
        y:m*m*m*p.sy+3*m*m*t*p.cp1y+3*m*t*t*p.cp2y+t*t*t*p.ty
    };
}

function update(dt){
    if(G.state==='menu'||G.state==='gameover'||G.state==='victory'){
        return;
    }
    if(G.state==='continue'){
        continueTimer-=dt;
        if(continueTimer<=0){
            gameOver();
        }
        return;
    }
    const PSPD=4.5;
    const f=dt/16;
    if(k[0]&&player.y>32) player.y-=PSPD*f;
    if(k[1]&&player.y<VH-18) player.y+=PSPD*f;
    if(k[2]&&player.x>40) player.x-=PSPD*f;
    if(k[3]&&player.x<VW-40) player.x+=PSPD*f;
    if(jActive){
        player.x+=jDX*PSPD*f;
        player.y+=jDY*PSPD*f;
    }
    if(player.y<32) player.y=32;
    if(player.y>VH-18) player.y=VH-18;
    if(player.x<40) player.x=40;
    if(player.x>VW-40) player.x=VW-40;
    if(flowerOn){
        player.inv=true;
        player.invT=0;
    }else if(player.inv){
        player.invT+=dt;
        if(player.invT>2000){
            player.inv=false;
            player.invT=0;
        }
    }
    if(curWpn!=='NORMAL'){
        wTimer-=dt;
        if(wTimer<=0){
            curWpn='NORMAL';
            wTimer=0;
        }
    }
    if(shieldOn){
        shTimer-=dt;
        if(shTimer<=0){
            shieldOn=false;
            shTimer=0;
        }
    }
    if(timeSlowOn){
        timeSlowTimer-=dt;
        if(timeSlowTimer<=0){
            timeSlowOn=false;
            timeSlowTimer=0;
        }
    }
    if(flowerOn){
        flowerTimer-=dt;
        flowerAngle+=dt*0.032;
        if(flowerTimer<=0){
            flowerOn=false;
            flowerTimer=0;
        }
    }
    if(missilesActive){
        missileTimer-=dt;
        if(missileTimer<=0){
            missilesActive=false;
            missileTimer=0;
        }else{
            missileShot-=dt;
        }
    }
    const tSlow=timeSlowOn?0.28:1.0;
    if(IS_MOBILE){
        if(player.canShoot){
            player.canShoot=false;
            setTimeout(()=>player.canShoot=true,200);
            firePlayer();
        }
    }else{
        if(k[4]&&player.canShoot){
            player.canShoot=false;
            setTimeout(()=>player.canShoot=true,200);
            firePlayer();
        }
    }
    if(missilesActive){
        if(missileShot<=0){
            missileShot=700;
            let tgt=null;
            let bestD=9999;
            if(boss&&boss.alive){
                tgt={x:boss.x,y:boss.y};
                bestD=0;
            }else{
                enemies.forEach(e=>{
                    if(e.state==='dead') return;
                    const d=Math.hypot(e.x-player.x,e.y-player.y);
                    if(d<bestD){
                        bestD=d;
                        tgt={x:e.x,y:e.y,ref:e};
                    }
                });
            }
            let liveTgt=tgt;
            if(boss&&boss.alive) liveTgt={ref:boss};
            pBullets.push({
                x:player.x,
                y:player.y,
                vx:0,
                vy:-9,
                trail:[],
                missile:true,
                tgt:liveTgt,
                life:220
            });
            SFX.shoot();
        }
    }
    if(flowerOn){
        if(performance.now()-player.lastShot>80){
            player.lastShot=performance.now();
            for(let i=0;i<8;i++){
                const a=(i/8)*Math.PI*2+flowerAngle;
                pBullets.push({
                    x:player.x,
                    y:player.y,
                    vx:Math.cos(a)*11,
                    vy:Math.sin(a)*11,
                    trail:[],
                    flower:true
                });
            }
            SFX.shoot();
        }
    }
    let allDead=true;
    enemies.forEach(e=>{
        if(e.state==='dead') return;
        allDead=false;
        if(e.state==='entering'){
            e.y+=2*f*tSlow;
            if(e.y>=e.formY){
                e.state='formation';
            }
        }
        if(e.state==='formation'){
            const slot=formSlot(e.idx,enemies.filter(x=>x.state!=='dead').length,G.wave);
            const sway=Math.sin(performance.now()*0.0008+e.phase)*VW*0.04;
            e.formX=slot.x+sway;
            e.formY=slot.y;
            e.x+=(e.formX-e.x)*0.07*tSlow;
            e.y+=(e.formY-e.y)*0.07*tSlow;
            if(G.state==='playing'){
                e.diveTimer-=dt;
                if(e.diveTimer<=0){
                    const dv=enemies.filter(x=>x.state==='diving').length;
                    if(dv<2+Math.floor(G.wave/2)){
                        startDive(e);
                    }else{
                        e.diveTimer=700+Math.random()*1400;
                    }
                }
            }
        }
        if(e.state==='diving'){
            e.pathT=Math.min(e.pathT+(0.00025+G.wave*0.000018)*dt*tSlow,1);
            const pos=bezier(e.path,e.pathT);
            e.x=pos.x;
            e.y=pos.y;
            const fireZone=e.x>60&&e.x<VW-60&&e.y>80&&e.y<VH-120;
            if(fireZone){
                e.fireTimer-=dt*tSlow;
                if(e.fireTimer<=0){
                    const dx=(player?player.x:VW/2)-e.x;
                    const dy=(player?player.y:VH*.85)-e.y;
                    const len=Math.hypot(dx,dy)||1;
                    const spd=3+G.wave*0.14;
                    eBullets.push({
                        x:e.x,
                        y:e.y,
                        vx:(dx/len)*spd,
                        vy:(dy/len)*spd,
                        type:'normal'
                    });
                    SFX.hit();
                    e.fireTimer=600+Math.random()*800;
                }
            }
            if(e.pathT>=1||e.y>VH+40){
                e.state='formation';
                e.y=-40;
                e.x=e.formX+(Math.random()-0.5)*60;
                e.pathT=0;
            }
        }
    });
    if(allDead&&(G.state==='playing'||G.state==='entering')){
        waveClear();
    }
    for(let i=pBullets.length-1;i>=0;i--){
        const b=pBullets[i];
        if(b.missile){
            b.life-=1;
            if(b.life<=0){
                pBullets.splice(i,1);
                continue;
            }
            if(b.tgt&&b.tgt.ref){
                if(b.tgt.ref.state==='dead'||b.tgt.ref.alive===false){
                    b.tgt=null;
                }else{
                    b.tgt.x=b.tgt.ref.x;
                    b.tgt.y=b.tgt.ref.y;
                }
            }
            if(b.tgt){
                const desired=Math.atan2(b.tgt.y-b.y,b.tgt.x-b.x);
                const cur=Math.atan2(b.vy,b.vx);
                let diff=desired-cur;
                while(diff>Math.PI) diff-=Math.PI*2;
                while(diff<-Math.PI) diff+=Math.PI*2;
                const turn=Math.min(Math.abs(diff),0.12)*Math.sign(diff);
                const newA=cur+turn;
                const spd=Math.hypot(b.vx,b.vy);
                b.vx=Math.cos(newA)*spd;
                b.vy=Math.sin(newA)*spd;
            }
        }
        b.x+=b.vx*f;
        b.y+=b.vy*f;
        if(b.y<-20||b.x<-20||b.x>VW+20){
            pBullets.splice(i,1);
            continue;
        }
        for(const e of enemies){
            if(e.state==='dead') continue;
            if(collide(b.x,b.y,4,e.x,e.y,18)){
                const dmg=b.laser?3:b.missile?2:1;
                e.hp-=dmg;
                if(e.hp<=0){
                    explode(e.x,e.y,'#00ffff',18);
                    SFX.explode();
                    addPts(100+e.type*100,e.x,e.y);
                    e.state='dead';
                    maybeDrop(e.x,e.y,G.wave);
                }else{
                    explode(e.x,e.y,'#ffffff',4);
                    SFX.hit();
                }
                if(!b.missile) pBullets.splice(i,1);
                break;
            }
        }
    }
    for(let i=eBullets.length-1;i>=0;i--){
        const b=eBullets[i];
        b.x+=b.vx*f*tSlow;
        b.y+=b.vy*f*tSlow;
        if(b.y>VH+20||b.x<-20||b.x>VW+20){
            eBullets.splice(i,1);
            continue;
        }
        if(shieldOn&&collide(b.x,b.y,6,player.x,player.y,28)){
            explode(b.x,b.y,'#4488ff',5);
            eBullets.splice(i,1);
            continue;
        }
        if(player&&!player.inv&&!flowerOn&&collide(b.x,b.y,5,player.x,player.y,14)){
            hitPlayer();
            eBullets.splice(i,1);
        }
    }
    for(let i=powerUps.length-1;i>=0;i--){
        const p=powerUps[i];
        p.x+=p.vx*f;
        p.animT+=2;
        if(p.x<-30){
            powerUps.splice(i,1);
            continue;
        }
        if(player&&collide(p.x,p.y,16,player.x,player.y,22)){
            collectPowerUp(p.type);
            powerUps.splice(i,1);
        }
    }
}

function firePlayer(){
    const bx=player.x;
    const by=player.y-17;
    switch(curWpn){
        case 'NORMAL':
            pBullets.push({x:bx,y:by,vx:0,vy:-10,trail:[]});
            break;
        case 'RAPID':
            pBullets.push({x:bx,y:by,vx:0,vy:-13,trail:[]});
            break;
        case 'DOUBLE':
            pBullets.push({x:bx,y:by,vx:-4,vy:-10,trail:[]});
            pBullets.push({x:bx,y:by,vx:4,vy:-10,trail:[]});
            break;
        case 'TRIPLE':
            pBullets.push({x:bx,y:by,vx:0,vy:-11,trail:[]});
            pBullets.push({x:bx,y:by,vx:-4,vy:-8,trail:[]});
            pBullets.push({x:bx,y:by,vx:4,vy:-8,trail:[]});
            break;
        case 'LASER':
            pBullets.push({x:bx,y:by,vx:0,vy:-15,trail:[],laser:true});
            break;
    }
    SFX.shoot();
}

function addPts(pts,x,y){
    G.score+=pts;
    floats.push({txt:'+'+pts,x,y,life:1,col:'#ffff00',sz:10});
}

function maybeDrop(x,y,wave){
    const now=performance.now();
    if(now-lastDrop<DROP_CD) return;
    lastDrop=now;
    if(Math.random()<0.15+wave*0.02){
        const types=['RAPID','DOUBLE','TRIPLE','LASER','BOMB','SHIELD','LIFE','TIME','FLOWER','MISSILE'];
        const type=types[Math.floor(Math.random()*types.length)];
        powerUps.push({
            x:x,
            y:y,
            vx:-2,
            type,
            animT:0
        });
    }
}

function collectPowerUp(type){
    SFX.powerUp();
    switch(type){
        case 'RAPID':case 'DOUBLE':case 'TRIPLE':case 'LASER':
            curWpn=type;
            wTimer=WDR;
            break;
        case 'BOMB':
            explode(player.x,player.y,'#ff0000',50);
            enemies.forEach(e=>{
                if(e.state!=='dead'){
                    e.hp-=25;
                    if(e.hp<=0){
                        explode(e.x,e.y,'#00ffff',18);
                        addPts(100+e.type*100,e.x,e.y);
                        e.state='dead';
                    }
                }
            });
            SFX.bomb();
            break;
        case 'SHIELD':
            shieldOn=true;
            shTimer=SH_DUR;
            break;
        case 'LIFE':
            if(G.lives<MAX_LIVES) G.lives++;
            break;
        case 'TIME':
            timeSlowOn=true;
            timeSlowTimer=TIME_DUR;
            break;
        case 'FLOWER':
            flowerOn=true;
            flowerTimer=FLOWER_DUR;
            break;
        case 'MISSILE':
            missilesActive=true;
            missileTimer=MISSILE_DUR;
            break;
    }
}

function hitPlayer(){
    G.lives--;
    SFX.playerHit();
    explode(player.x,player.y,'#00ffff',26);
    if(G.lives<=0){
        triggerContinue();
        return;
    }
    player.inv=true;
    player.invT=0;
    floats.push({txt:'HIT!',x:player.x,y:player.y-20,life:1,col:'#ff2222',sz:14});
}

function triggerContinue(){
    if(continueLeft<=0){
        gameOver();
        return;
    }
    G.state='continue';
    continueTimer=8000;
    pBullets=[];
    eBullets=[];
}

function doContinue(){
    continueLeft--;
    G.lives=MAX_LIVES;
    player=makePlayer();
    G.state='playing';
    floats.push({txt:'CONTINUE!',x:VW/2,y:VH*.5,life:1.5,col:'#ffcc00',sz:18});
}

function gameOver(){
    G.state='gameover';
    if(G.score>G.hi){
        G.hi=G.score;
        localStorage.setItem('dw_hi',String(G.hi));
    }
    pBullets=[];
    eBullets=[];
    powerUps=[];
    stopMusic();
}

function waveClear(){
    G.wave++;
    if(G.wave%3===0){
        startBoss();
    }else{
        G.state='entering';
        buildWave();
    }
}

function startBoss(){
    const bossDefs=[
        {name:'RAPTOR',col:'#ff0066',hp:60,speed:1.0,fr:1200},
        {name:'SCORPION',col:'#ff6600',hp:80,speed:1.2,fr:1000},
        {name:'TITAN',col:'#cc00ff',hp:95,speed:1.4,fr:900},
        {name:'PHANTOM',col:'#00ffff',hp:110,speed:1.5,fr:800},
        {name:'REAPER',col:'#ffff00',hp:130,speed:1.6,fr:700},
        {name:'HYDRA',col:'#00ff88',hp:150,speed:1.7,fr:650},
        {name:'CITADEL',col:'#ff4488',hp:170,speed:1.8,fr:600},
        {name:'VIPER',col:'#00ffaa',hp:190,speed:2.0,fr:550},
        {name:'CYCLOPS',col:'#ff8800',hp:215,speed:2.2,fr:500},
        {name:'OMEGA-X',col:'#ffffff',hp:250,speed:2.4,fr:420},
        {name:'NEMESIS',col:'#ff0066',hp:350,speed:1.4,fr:520}
    ];
    const bossNum=Math.min(Math.floor((G.wave-1)/3),bossDefs.length-1);
    const def=bossDefs[bossNum];
    G.isBossWave=true;
    enemies=[];
    setTimeout(()=>{
        boss={
            name:def.name,
            col:def.col,
            hp:def.hp,
            maxHp:def.hp,
            x:VW/2,
            y:-50,
            alive:true,
            hitFlash:0
        };
        enemies=[];
        eBullets=[];
        showMsg('BOSS\n'+def.name+'!','#ff0066');
        G.state='playing';
    },3200);
}

function showMsg(t,c){
    bigMsg={txt:t,col:c||C.ORANGE,life:1,sc:.4};
}

let last=0;
function loop(now){
    requestAnimationFrame(loop);
    const dt=Math.min((now-last)/1000,0.1);
    last=now;
    initAudio();
    update(dt);
    draw(dt);
}

player=makePlayer();
requestAnimationFrame(loop);
})();
