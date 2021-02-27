function attachTooltip(buttonContainerId, tooltipId, title, content) {
  const buttonContainer = document.getElementById(buttonContainerId);

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.classList.add('hidden');
  tooltip.setAttribute('id', tooltipId);
  buttonContainer.appendChild(tooltip);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('tooltip-title-container');
  const tooltipTitle = document.createElement('span');
  tooltipTitle.classList.add('tooltip-title');
  tooltipTitle.textContent = title;
  tooltip.appendChild(titleContainer);
  titleContainer.appendChild(tooltipTitle);

  const tooltipContent = document.createElement('div');
  tooltipContent.classList.add('tooltip-content');
  tooltipContent.textContent = content;
  tooltip.appendChild(tooltipContent);

  buttonContainer.querySelector('button').onclick = function () {
    tooltip.classList.remove('hidden');
  };

  tooltip.onclick = function () {
    tooltip.classList.add('hidden');
  };
}

attachTooltip(
  'button-container',
  'tooltip',
  'Popover title',
  'And here\'s some amazing content. It\'s very engaging. Right?',
);
