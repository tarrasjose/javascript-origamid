// export default function outsideClick(element, events, callback) {
//   console.log('ativando');
//   const html = document.documentElement;
//   const outside = 'data-outside';
//   // console.log(html);
//   if(!element.hasAttribute(outside)) {
//     events.forEach(userEvent => {
//       html.addEventListener(userEvent, handleOutsideClick);
//     })
  
//     element.setAttribute(outside, '');
//   }
  
//   function handleOutsideClick(event) {
//     if(!element.contains(event.target)) {
//       element.removeAttribute(outside);
//       // console.log(element);
//       events.forEach(userEvent => {
//         html.removeEventListener(userEvent, handleOutsideClick);
//       })
      
//       callback();
//     }
//   }
// }

// }

export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  
  if(!element.hasAttribute(outside)) {
    events.forEach(userEvents => {
      html.addEventListener(userEvents, handleOutsideClick);
    })
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
      if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvents => {
        html.removeEventListener(userEvents, handleOutsideClick);
      })
      callback()
    }
  }

}
