const buildPinCard = (pinObject) => {
  const domString = `<div class="pin-container">
                      <div class="pin-card" id="${pinObject.firebaseKey}" style="width: 18rem; background-image: url(${pinObject.pinUrl});">
                        <div class="pin-btn-container d-flex justify-content-center align-items-end">
                          <button class="btn btn-danger" id="delete-pin-btn">Delete Pin</button>
                        </div>
                      </div>
                    </div>`;
  $('body').on('click', '#delete-pin-btn', (e) => {
    e.stopImmediatePropagation();
    console.warn('pin btn clicked', e);
  });
  return domString;
};

export default { buildPinCard };
