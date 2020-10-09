const buildPinCard = (pinObject) => {
  const domString = `<div class="pin-container">
                      <div class="pin-card" id="${pinObject.firebaseKey}" style="width: 18rem; background-image: url(${pinObject.pinUrl});">
                        <div class="pin-btn-container d-flex justify-content-center align-items-end">
                          <button type="button" class="btn btn-info edit-pin" id="${pinObject.firebaseKey}">edit</button>
                          <button class="btn btn-danger delete-pin-btn" id="${pinObject.firebaseKey}">Delete Pin</button>
                        </div>
                      </div>
                    </div>`;
  $('body').on('click', '.delete-pin-btn', (e) => {
    e.stopImmediatePropagation();
    console.warn('pin btn clicked', e);
  });
  return domString;
};

export default { buildPinCard };
