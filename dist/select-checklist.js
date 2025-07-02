function initSelectChecklist(selector = '.select-checklist') {
  document.querySelectorAll(selector).forEach(select => {
    if (select.dataset.enhanced) return;
    select.dataset.enhanced = true;
    select.style.display = 'none';

    const wrapper = document.createElement('div');
    wrapper.className = 'position-relative';

    const button = document.createElement('div');
    button.className = 'form-select w-100';
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    button.textContent = 'Seçiniz';

    const menu = document.createElement('div');
    menu.className = 'shadow border rounded bg-white position-absolute w-100 mt-1';
    menu.style.zIndex = '1000';
    menu.style.display = 'none';
    menu.style.maxHeight = '300px';
    menu.style.overflowY = 'auto';

    Array.from(select.options).forEach(opt => {
      const label = document.createElement('label');
      label.className = 'd-flex align-items-center gap-2 px-3 py-1';
      label.style.cursor = 'pointer';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = opt.value;
      checkbox.checked = opt.selected;

      checkbox.addEventListener('change', () => {
        opt.selected = checkbox.checked;
        updateButtonText();
      });

      checkbox.addEventListener('click', e => e.stopPropagation());
      label.addEventListener('click', e => e.stopPropagation());

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(' ' + opt.text));
      menu.appendChild(label);
    });

    function updateButtonText() {
      const selectedCount = select.selectedOptions.length;
      button.textContent = selectedCount > 0 ? `${selectedCount} seçili` : 'Seçiniz';
    }

    button.addEventListener('click', () => {
      menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
    });

    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        menu.style.display = 'none';
      }
    });

    updateButtonText();
    wrapper.appendChild(button);
    wrapper.appendChild(menu);
    select.parentNode.insertBefore(wrapper, select.nextSibling);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSelectChecklist();
});