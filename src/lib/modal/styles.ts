export const modalStyles = (accentColor = '#6452f7', isDarkMode = false) => `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  .MagicLink__formOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${
      !isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
    };
    backdrop-filter: blur(6px);
    z-index: 9999;
  }
  .MagicLink__formContainer {
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    color: ${!isDarkMode ? 'black' : 'white'};
    text-align: center;
    gap: 30px;
    align-items: center;
    justify-content: start;
    position: fixed;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(450px, 90%);
    z-index: 9999;
    background-color: ${!isDarkMode ? 'white' : '#323233'};
    box-shadow: 0 12px 56px rgb(119 118 122 / 15%);
    border-radius: 30px;
    padding: 80px 20px;
  }
  .MagicLink__closeButton {
    position: absolute;
    top: 0;
    right: 15px;
    padding: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
    z-index: 9999;
  }
  .MagicLink__formHeader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  .MagicLink__customLogo{
    height: 100px;
    object-fit: contain;
  }
  .MagicLink__logoText{
    font-size: 20px;
    font-weight: bold;
    color: ${!isDarkMode ? '#333' : 'white'};
  }
  .MagicLink__formBody{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 100%;
  }
  .MagicLink__emailLabel{
    font-size: 17px;
    font-weight: 500;
  }
  .MagicLink__emailInput {
    padding: 10px;
    width: 100%;
    max-width: 300px;
    text-align: center;
    margin-bottom: 10px;
    border-width: 1px;
    border-color: ${!isDarkMode ? '#D6D6D6' : '#333'};
    color: ${!isDarkMode ? '#333' : 'white'};
    font-size: 17px;
    font-weight: 400;
    border-radius: 5px;
    background-color: ${!isDarkMode ? 'white' : '#222'};
  }
  .MagicLink__emailInput::placeholder { 
    color: ${!isDarkMode ? '#D6D6D6' : '#555555'};
    opacity: 1; 
  }
  .MagicLink__submitButton {
    display: block;
    padding: 8px 30px;
    border: none;
    cursor: pointer;
    color: white;
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 12px;
    background-color: ${accentColor};
  }
  .MagicLink__oauthButtonsContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 90%;
  }
  .MagicLink__oauthButton{
    display: block;
    padding: 5px;
    border: none;
    cursor: pointer;
    border-radius: 100px;
  }
`;
