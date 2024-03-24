import { adCreate } from "./ad-creation-model.js";

export function adCreationController(adCreation) {
  adCreation.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(adCreation);
    const ad = Object.fromEntries(formData.entries());



    try {
      await adCreate(ad);
      alert('Ad created successfully!');
      window.location.href = '/';
    } catch (error) {
      alert(error)
    }

  });


}
