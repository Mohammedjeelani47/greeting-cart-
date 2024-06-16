document.getElementById('wishButton').addEventListener('click', function() {
    const wishes = [
        "May the blessings of Allah be with you and your family forever and always. Eid Mubarak! 🎉🙏",
        "On this joyous day of Eid ul-Adha, may Allah fulfill all your dreams and hopes. 🎊🌟",
        "Sending you warm wishes on Eid and wishing that it brings your way ever joys and happiness. Remember me in your prayers. 🎈✨",
        "Eid Mubarak! May your sacrifices be appreciated and your prayers be answered by the Almighty. 🎁🌙",
        "Wishing you and your family health, happiness, and prosperity on this Eid ul-Adha. 🌙🎉"
    ];

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    const wishMessage = document.getElementById('wishMessage');

    wishMessage.textContent = randomWish;
    wishMessage.classList.remove('hidden');
});