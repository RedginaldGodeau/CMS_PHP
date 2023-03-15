const AddContentAnimation = (elem) => {
    const popList = elem.querySelector('.popList')
    const popListItems = popList.querySelectorAll('.popBtn')

    popList.classList.toggle('active')

    const showItem = gsap.timeline()
    showItem.fromTo(popList, {left:0, opacity: 0, duration: .5, ease: Expo.easeInOut}, {left:'calc(100% + 15px)', opacity: 1, duration: .5, ease: Expo.easeInOut})
    for (const item of popListItems) {
        showItem.fromTo(item, {
            x:"-50px", opacity: 0, rotation:-45,
            duration: .5, ease: Back.easeInOut.config(1.7)
        }, {
            x:0, opacity: 1, rotation:0,
            duration: .5, ease: Back.easeInOut.config(1.7)
        })
    }

    return showItem
}

document.addEventListener('DOMContentLoaded', () => {
    const AddContentBtnElement = document.querySelector('.addBtn')

    let activated = false

    AddContentBtnElement.addEventListener('click', e => {

        const addCtnAnim = AddContentAnimation(AddContentBtnElement);

        if (activated) {
            addCtnAnim.seek(1.5);
            addCtnAnim.reverse()
            activated = false
        } else {
            addCtnAnim.resume()
            activated = true
        }

    })

    document.querySelector('.addNoteBtn').addEventListener('click', e => {
        const element = document.createElement("textarea");
        document.querySelector('#cms_container .innerCtn').appendChild(element);
    })

    const textareas = document.querySelectorAll(".innerCtn textarea");
    for (const textarea of textareas) {
        textarea.addEventListener("keyup", e =>{
            console.log("test");

            textarea.style.height = "63px";

            let scHeight = e.target.scrollHeight;
            textarea.style.height = `${scHeight}px`;
        });
    }
})