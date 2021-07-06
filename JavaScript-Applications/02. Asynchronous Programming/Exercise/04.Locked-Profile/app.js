function lockedProfile() {

    (async () => {
        document.querySelector('.profile').remove();

        let profileRequest = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        let profiles = await profileRequest.json();

        let profilesDiv = document.getElementById('main')
        Object.keys(profiles)
            .forEach((p, i) => profilesDiv.appendChild(createHtmlObject(profiles[p], i + 1)))

    })();

    function createHtmlObject(p, i) {
        //profileDiv
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        //profileDiv>img
        let profilePicture = document.createElement('img');
        profilePicture.setAttribute('src', "./iconProfile2.png");
        profilePicture.classList.add('userIcon');

        //profileDiv>label
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        //radioInputLock
        let lockInput = document.createElement('input');
        lockInput.type = 'radio';
        lockInput.name = `user${i}Locked`;
        lockInput.value = 'lock';
        lockInput.checked = true;

        //label unlock
        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';

        let unlockBr = document.createElement('br');
        let unlockHr = document.createElement('hr');

        //radioInputUnlock
        let unlockInput = document.createElement('input');
        unlockInput.type = 'radio';
        unlockInput.name = `user${i}Locked`;
        unlockInput.value = 'unlock';

        //username
        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = `user${i}Username`;
        usernameInput.value = `${p.username}`;
        usernameInput.disabled = true;
        usernameInput.readonly = true;

        //hidden fields
        let hiddenDiv = document.createElement('div');
        hiddenDiv.id = `user${i}HiddenFields`;
        hiddenDiv.style.display = 'none';

        let hiddenHr = document.createElement('hr');

        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${i}Email`
        emailInput.value = `${p.email}`;
        emailInput.disabled = true;
        emailInput.readOnly = true;

        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = `user${i}Age`
        ageInput.value = `${p.age}`;
        ageInput.disabled = true;
        ageInput.readOnly = true;

        hiddenDiv.appendChild(hiddenHr);
        hiddenDiv.appendChild(emailLabel);
        hiddenDiv.appendChild(emailInput);
        hiddenDiv.appendChild(ageLabel);
        hiddenDiv.appendChild(ageInput);

        //Show more button

        let showButton = document.createElement('button');
        showButton.textContent = 'Show more';
        showButton.addEventListener('click', toggleInfo);

        profileDiv.appendChild(profilePicture);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockInput);
        profileDiv.appendChild(unlockBr);
        profileDiv.appendChild(unlockHr);
        profileDiv.appendChild(usernameLabel)
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(hiddenDiv);
        profileDiv.appendChild(showButton);

        return profileDiv;
    }

    function toggleInfo(e) {
        let radioButton = e
            .target
            .parentElement
            .querySelector('input[type="radio"]');

        if (radioButton.checked) {
            return;
        }

        let showMoreButton = e.target;

        if (showMoreButton.textContent === 'Show more') {
            showMoreButton.textContent = 'Hide it';

            showMoreButton.previousSibling
                .style
                .display = 'block';
        } else {
            showMoreButton.textContent = 'Show more';

            showMoreButton.previousSibling
                .style
                .display = 'none';
        }
    }
}