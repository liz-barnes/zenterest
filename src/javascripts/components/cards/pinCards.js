const buildPinCard = (pinObject) => {
  const domString = `<div class="pin-container card-container">
                      <div class="pin-card card" id="${pinObject.firebaseKey}" style="background-image: url(${pinObject.pinUrl});">
                        <div class="pin-btn-container">
                          <button type="button" class="btn btn-info edit-pin edit-btn" id="${pinObject.firebaseKey}">Edit</button>
                          <button class="btn btn-danger delete-pin-btn delete-btn" id="${pinObject.firebaseKey}">Delete Pin</button>
                        </div>
                      </div>
                    </div>`;
  $('body').on('click', '.delete-pin-btn', (e) => {
    e.stopImmediatePropagation();
  });
  return domString;
};

export default { buildPinCard };
