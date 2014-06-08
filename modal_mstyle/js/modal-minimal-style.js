
/**
 * @file modal-minimal-style.js
 * CTools JS theme implementation :
 * Provide the HTML to create the modal dialog.
 * @see http://drupion.com/blog/10-steps-creating-ctools-modal-window-drupal-7
 * @see contrib module 'modal_forms'
 */

(function ($) {

Drupal.theme.prototype.modal_minimal_style = function () {
  var html = '';

  html += '<div id="ctools-modal" class="popups-box">';
  html += '  <div class="ctools-modal-content ctools-modal-content--minimal">';
  html += '    <div class="popups-container">';
  html += '      <div class="modal-header popups-title">';
  html += '        <span id="modal-title" class="modal-title"></span>';
  html += '        <span class="popups-close close">' + Drupal.CTools.Modal.currentSettings.closeText + '</span>';
  html += '      </div>';
  html += '      <div class="modal-scroll"><div id="modal-content" class="modal-content popups-body"></div></div>';
  html += '    </div>';
  html += '  </div>';
  html += '</div>';

  return html;
}

})(jQuery);
