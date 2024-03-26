export const scrollToSection = (sectionId) => {
  var element = document.getElementById(sectionId);
  console.log(element)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}