import formatDate from './formatDate';

function container() {
  const newContainer = document.createElement('div');
  newContainer.classList.add('wrapper');
  newContainer.innerHTML = `
  <div class="unit-container">
    <div class="container__header">
      <h2 class="widget-header">Incoming</h2>
      <span class="btn">Clear list</span>
    </div>
    <ul class="unit-list">
    </ul>
    <div class="container__footer">
    </div>
  </div>
    `;
  return newContainer;
}

function unit(data) {
  const newUnit = document.createElement('li');
  newUnit.classList.add('unit');
  newUnit.dataset.unitId = data.id;
  if (data.subject.length > 15) {
    // eslint-disable-next-line no-param-reassign
    data.subject = data.subject.substring(0, 15);
    // eslint-disable-next-line no-param-reassign
    data.subject += '...';
  }
  newUnit.innerHTML = `
      <div class="unit__author">
        <span class="unit-autor">${data.from}</span>
      </div>
      <div class="unit__body">
        <span class="unit-text">${data.subject}</span>
      </div>
      <div class="unit__timestamp">
        <span class="unit-timestamp">${formatDate(data.received)}</span>
      </div>
  `;
  return newUnit;
}

export { container, unit };
