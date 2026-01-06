/**
 * ASCII Loading Bar Module
 * Módulo reutilizable para mostrar una barra de carga con caracteres ASCII
 * Puede usarse en múltiples proyectos
 * 
 * Uso:
 *   const loader = new ASCIILoadingBar('status-progress');
 *   loader.setProgress(0.25);  // 25% completado
 */

class ASCIILoadingBar {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.progress = 0;
    this.maxWidth = options.maxWidth || 50;  // Número de caracteres
    this.fillChar = options.fillChar || '█';  // Carácter de relleno
    this.emptyChar = options.emptyChar || '░';  // Carácter vacío
    this.barColor = options.barColor || '#00ff00';  // Verde por defecto
    this.textColor = options.textColor || '#00ff00';
    
    if (this.container) {
      this.container.innerHTML = '';
      this.container.style.fontFamily = 'monospace';
      this.container.style.color = this.textColor;
      this.container.style.fontSize = '14px';
      this.container.style.textAlign = 'center';
      this.container.style.lineHeight = '1.5';
      this.container.style.userSelect = 'none';
    }
  }

  /**
   * Actualiza el progreso de la barra (0 a 1)
   * @param {number} value - Valor entre 0 y 1
   */
  setProgress(value) {
    this.progress = Math.max(0, Math.min(1, value));
    this.render();
  }

  /**
   * Renderiza la barra de carga
   */
  render() {
    if (!this.container) return;

    const filledCount = Math.round(this.maxWidth * this.progress);
    const emptyCount = this.maxWidth - filledCount;
    
    const bar = this.fillChar.repeat(filledCount) + this.emptyChar.repeat(emptyCount);
    const percentage = Math.round(this.progress * 100);
    
    const html = `
      <div style="color: ${this.textColor}; margin-bottom: 8px;">
        [${bar}]
      </div>
      <div style="color: ${this.textColor}; font-size: 12px;">
        ${percentage}%
      </div>
    `;
    
    this.container.innerHTML = html;
  }

  /**
   * Incrementa el progreso
   * @param {number} amount - Cantidad a incrementar (0 a 1)
   */
  increment(amount = 0.01) {
    this.setProgress(this.progress + amount);
  }

  /**
   * Completa la barra al 100%
   */
  complete() {
    this.setProgress(1);
  }

  /**
   * Reinicia la barra al 0%
   */
  reset() {
    this.setProgress(0);
  }

  /**
   * Oculta la barra
   */
  hide() {
    if (this.container) {
      this.container.style.display = 'none';
    }
  }

  /**
   * Muestra la barra
   */
  show() {
    if (this.container) {
      this.container.style.display = 'block';
    }
  }
}

// Exportar para uso en Node.js/módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ASCIILoadingBar;
}
