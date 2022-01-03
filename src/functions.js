
const onLinkToMenu = (e, setRoute, text) => {
    e.preventDefault();
    setRoute(text);
  }

module.exports = {
    onLinkToMenu
};