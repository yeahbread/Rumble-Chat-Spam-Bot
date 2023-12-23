const egoStyles = `
#egoPopupContainer {
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 20vmax;
  height: 30rem;
  border: 1mm solid #010313;
  background-color: #082035;
  border-radius: 1rem;
  padding: 1rem;
  cursor: move;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  overflow-x: hidden;
  z-index: 99999999;
}
.egoChatItem {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  margin-top: .4rem;
}
.egoChatContainer {
  width: 100%;
  border-radius: 1rem;
  height: 21rem;
  overflow: auto;
  border: .5mm #010314 solid;
  display: flex;
  flex-direction: column;
}
img.egoHitListThumbnail {
    border-radius: 1rem;
    width: 100%;
    height: fit-content;
    object-fit: contain;
}
.egoTab {
    display: inline-block;
    cursor: pointer;
    border: 1mm solid #263946;
    border-radius: 1rem;
    padding: .5rem;
    position: relative;
    margin-top: -1rem;
    margin-right: 1rem;
}

.egoTabContent {
    display: none;
    width: 100%;
    color: #fff;
    max-width: 20vmax;
}
.hitListContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  flex-direction: row;
  height: 17rem;
  overflow: auto;
  border-radius: 1rem;
  background-color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.egoHitListItem {
    width: 40%;
    border: 1mm solid #4d81a8;
    padding: .5rem;
    border-radius: 2rem;
    background-color: #6363a526;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.1rem;
}
.egoHitListAuthor {
  display: flex;
  position: relative;
  padding: 0;
  margin-bottom: .7rem;
  bottom: -.5rem;
  width: 100%;
  text-align: center;
  height: 1.5rem;
  flex-direction: column;
  overflow: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;
  text-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  text-overflow: ellipsis;
}
button.egoHitButton {
    background-color: red;
    border-radius: 1rem;
    padding: 0rem 0.5rem;
    transition: all 0.3s ease;
}
button.egoHitButton:hover {
    filter: brightness(1.5)contrast(4.5);
}
.egoAttackPopup {
    display: flex;
    position: fixed;
    top: 1rem;
    left: 27vmax;
    z-index: 9999999999999;
    background-color: #082035;
    border: 1mm solid #010314;
    border-radius: 1rem;
    padding: 1rem;
    width: 20%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    cursor: move;
}
.egoProfileExpand svg {
  position: relative;
  width: 1rem;
  height: 1rem;
  display: inline-block;
}
.egoUserNameContent button {
  background-color: #3c3c86;
  padding: .2rem 1rem;
  border-radius: 1rem;
  margin: .2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
}
.egoUserNamePopup {
  display: flex;
  position: fixed;
  top: 1rem;
  left: 50vmax;
  z-index: 9999999999999;
  background-color: #082035;
  border: 1mm solid #010314;
  border-radius: 1rem;
  padding: 1rem;
  width: 20%;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  cursor: move;
}
.egoChatItem img {
  width: 2rem;
  height: 2rem;
  object-fit: fill;
  border-radius: 1rem;
  border: .5mm white solid;
  margin-right: .7rem;
}
.egoAttackPopup input {
  border-radius: 1rem;
  border: .5mm #49596a solid;
  background-color: #051523;
  padding: .5rem .5rem;
  text-align: left;
  width: 100%;
  text-wrap: wrap;
  overflow: auto;
}
.egoAttackPopup input:focus-visible {
  border: white .5mm solid;
  outline: none;
}
.chat--send {
  margin-left: 0.5rem;
  width: 36px;
  height: 36px;
  background: #85C742;
  color: #061726;
  border-radius: 100px;
  transition: opacity 75ms linear, background-color 75ms linear;
}
.chat--send--icon {
  position: relative;
  top: 3px;
  left: -1px;
  stroke: currentColor;
}
span.egoCloseButton {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
}
.egoUserNameContent svg {
  position: relative;
  top: 0;
  right: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin: .2rem;
}
.egoUserNameContent img {
  width: 10rem;
}
.egoUserNameContent {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
button.egoPopupCloseButton {
  position: absolute;
  top: 0;
  right: 0;
  width: 1rem;
  height: 1rem;
  margin: .2rem;
}
.egoAttackSingle {
  background-color: red;
  padding: 0.6rem;
  border-radius: 100%;
  font-size: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.egoAttackSingle:hover {
  filter: brightness(1.5) contrast(2.5);
}
p.egoCurrentSetup {
  padding: 0;
  margin: 0;
  color: #ffffff69;
}
textarea#messageInput {
  width: 95%;
  border: 1mm black solid;
  border-radius: 1rem;
  padding: .5rem;
}
button.egoSaveButton {
  background-color: #44b644;
  padding: .2rem .4rem;
  border-radius: 1rem;
}
button.egoSaveButton:hover {
  filter: brightness(1.1) contrast(1.1);
}
input#sleepInput {
  border-radius: 1rem;
  border: 1mm black solid;
  padding: .3rem;
}
button#attackAllButton {
  position: relative;
  width: 100%;
  background-color: crimson;
  border-radius: 5rem;
  font-weight: bolder;
  font-size: 1rem;
  cursor: pointer;
}
`;

const egoStyleElement = document.createElement('style');
egoStyleElement.textContent = egoStyles;
document.head.appendChild(egoStyleElement);

const egoPopupContainer = document.createElement('div');
egoPopupContainer.id = 'egoPopupContainer';

let egoOffsetX, egoOffsetY;
let isEgoDragging = false;

egoPopupContainer.addEventListener('mousedown', (e) => {
  isEgoDragging = true;
  egoOffsetX = e.clientX - egoPopupContainer.getBoundingClientRect().left;
  egoOffsetY = e.clientY - egoPopupContainer.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (isEgoDragging) {
    const x = e.clientX - egoOffsetX;
    const y = e.clientY - egoOffsetY;
    egoPopupContainer.style.left = `${x}px`;
    egoPopupContainer.style.top = `${y}px`;
  }
});

document.addEventListener('mouseup', () => {
  isEgoDragging = false;
});

const egoTabContainer = document.createElement('div');
const egoContentContainer = document.createElement('div'); 
const hitListContainer = document.createElement('div'); 
const entireVideoIDList = [];

const tab1Content = `
<h2>Currently Active Live Streams:</h2>

    <div class="hitListContainer"></div>

    <div class="tabContentInner">
    <p class="egoCurrentSetup" >BEFORE ATTACKING: Please check settings tab and make sure it's set up correctly.</p>

      <button id="attackAllButton">Attack All</button>

    </div>
`;

const tab2Content = `
  <div class="tabContentInner">
    <h2>Settings</h2>
    <label for="messageInput">Message:</label>
    <textarea id="messageInput" rows="2" cols="40"></textarea>
    <br>
    <label for="sleepInput">Interval(MS):</label>
    <input type="number" id="sleepInput">
    <br>
    <button class="egoSaveButton" onclick="saveSettings()">Save</button>
  </div>
`;



        
const tab3Content = `
    <div class="tabContentInner">
      <h2>Free project created by e9o</h2>
      <h3>🐍</h3>

      <p>Developed entirely by @_e9o on discord!</p>
      <a href="https://dsc.gg/">DISCORD</a>
    </div>
`;



egoTabContainer.appendChild(createTab('Index', tab1Content, egoContentContainer, hitListContainer));
egoTabContainer.appendChild(createTab('Settings', tab2Content, egoContentContainer, hitListContainer));
egoTabContainer.appendChild(createTab('About', tab3Content, egoContentContainer, hitListContainer));

egoPopupContainer.appendChild(egoTabContainer);
egoPopupContainer.appendChild(egoContentContainer); 
egoPopupContainer.appendChild(hitListContainer); 

egoContentContainer.querySelector('.egoTabContent.Index').style.display = 'block';
document.body.appendChild(egoPopupContainer);

async function createDraggablePopup() {
  let pageIndex = 1;
  let accumulatedHTML = '';

  while (true) {
    try {
      const response = await fetch(`/browse/live?page=${pageIndex}`);
      if (!response.ok) {
        if (response.status === 404) {
          break;
        } else {
          throw new Error(`Failed to fetch /browse/live?page=${pageIndex}: ${response.statusText}`);
        }
      }

      const htmlData = await response.text();
      accumulatedHTML += parseEditorPicks(htmlData, egoContentContainer);

      pageIndex++;
    } catch (error) {
      console.error(`Error fetching /browse/live?page=${pageIndex}:`, error);
      break;
    }
  }

  const sortedHTML = sortDivsByViews(accumulatedHTML);

  hitListContainer.innerHTML = sortedHTML;
}

function sortDivsByViews(html) {
  const container = document.createElement('div');
  container.innerHTML = html;

  const divs = Array.from(container.getElementsByClassName('egoHitListItem'));

  divs.sort((a, b) => {
    const aViews = parseInt(a.querySelector('.egoHitListViewCount').textContent.split(' ')[1].replace(/,/g, ''), 10);
    const bViews = parseInt(b.querySelector('.egoHitListViewCount').textContent.split(' ')[1].replace(/,/g, ''), 10);

    return bViews - aViews;
  });

  container.innerHTML = '';
  divs.forEach((div) => {
    container.appendChild(div);
  });

  return container.innerHTML;
}

function createTab(egoLabel, egoContent, egoContentContainer, hitListContainer) {
  const egoTab = document.createElement('div');
  egoTab.className = 'egoTab';
  egoTab.textContent = egoLabel;

  egoTab.addEventListener('click', () => {
    document.querySelectorAll('.egoTabContent').forEach((content) => {
      content.style.display = 'none';
    });

    hitListContainer.innerHTML = '';

    egoContentContainer.querySelector(`.${egoLabel.replace(/\s+/g, '')}`).style.display = 'block';
  });

  const tabContent = document.createElement('div');
  tabContent.className = 'egoTabContent ' + egoLabel.replace(/\s+/g, ''); 
  tabContent.innerHTML = egoContent;
  egoContentContainer.appendChild(tabContent);

  return egoTab;
}

const videoIdSet = new Set();


async function parseEditorPicks(htmlData, currentTab) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlData, 'text/html');

  const videoEntries = doc.querySelectorAll('.videostream.thumbnail__grid-item');

  videoEntries.forEach(async (videoEntry) => {
    const videoId = videoEntry.getAttribute('data-video-id');

    if (videoId !== null) {
      try {
        if (videoIdSet.has(videoId)) {
          await updateViewerCountForAllVideos(videoId);
        } else {
          videoIdSet.add(videoId);

          entireVideoIDList.push(videoId);

          await processVideo(videoEntry, videoId, currentTab);
        }
      } catch (error) {
        console.error(`Error processing video ${videoId}:`, error);
      }
    }
  });

  return ''; 
}
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}

async function processVideo(videoEntry, videoId, currentTab) {
    const viewerCountResponse = await fetch(`https://wn0.rumble.com/service.php?video_id=${videoId}&name=video.watching-now`);
    const viewerCountData = await viewerCountResponse.json();
  
    if (viewerCountData.data.livestream_status === 0) {
      console.log(`Skipping video ${videoId} with livestream_status 0`);
      return; 
    }
  
    const videoImg = videoEntry.querySelector('.thumbnail__image');
    const videoImgSrc = videoImg ? videoImg.getAttribute('src') : null;
  
    const videoBy = videoEntry.querySelector('.channel__name');
    const videoByText = videoBy ? videoBy.textContent.trim() : null;
  
    const hitListItem = currentTab.querySelector(`.egoHitListItemID[data-id="${videoId}"]`);
  
    if (hitListItem) {
      const viewerCountElement = hitListItem.closest('.egoHitListItem').querySelector('.egoHitListViewCount');
      if (viewerCountElement) {
        viewerCountElement.innerHTML = `<img src="/img/categories/svg/views.svg" alt="views" width="14" height="12.25"> ${viewerCountData.data.viewer_count.toLocaleString()}`;
      }
    } else {
      const videoElement = document.createElement('div');
      videoElement.className = 'egoHitListItem'; 
      videoElement.setAttribute('data-id', videoId); 
      videoElement.innerHTML = `
        <div class="egoHitListItemID" data-id="${videoId}">${videoId}</div> 
        <div class="egoHitListViewCount"><img src="/img/categories/svg/views.svg" alt="views" width="14" height="12.25"> ${viewerCountData.data.viewer_count.toLocaleString()}</div> 
        <img class="egoHitListThumbnail" src=${videoImgSrc} alt="thumbnail" > 
        <div class="egoHitListAuthor">${videoByText}</div> 
        <button class="egoHitButton" onclick="attackVid('${videoId}')">Attack Video</button> 
      `;
  
      currentTab.querySelector('.hitListContainer').appendChild(videoElement);
    }
  }
  
  
  async function updateViewerCountForAllVideos(videoId) {
    try {
      const viewerCountResponse = await fetch(`https://wn0.rumble.com/service.php?video_id=${videoId}&name=video.watching-now`);
      const viewerCountData = await viewerCountResponse.json();
  
      const videoElement = Array.from(document.querySelectorAll(`.egoHitListItemID[data-id="${videoId}"]`)).find((element) =>
        element.getAttribute('data-id') === videoId
      );
  
      if (videoElement) {
        const viewerCountElement = videoElement.closest('.egoHitListItem').querySelector('.egoHitListViewCount');
        if (viewerCountElement) {
          viewerCountElement.innerHTML = `<img src="/img/categories/svg/views.svg" alt="views" width="14" height="12.25"> ${viewerCountData.data.viewer_count.toLocaleString()}`;
        }
      }
    } catch (error) {
      console.error(`Error updating viewer count for video ${videoId}:`, error);
    }
  }  

async function updateAllPages() {
    let pageIndex = 1;
    let accumulatedHTML = '';
  
    while (true) {
      try {
        const response = await fetch(`/browse/live?page=${pageIndex}`);
        if (!response.ok) {
          if (response.status === 404) {
            break;
          } else {
            throw new Error(`Failed to fetch /browse/live?page=${pageIndex}: ${response.statusText}`);
          }
        }
  
        const htmlData = await response.text();
        accumulatedHTML += parseEditorPicks(htmlData, egoContentContainer);
  
        pageIndex++;
      } catch (error) {
        console.error(`Error fetching /browse/live?page=${pageIndex}:`, error);
        break;
      }
    }
  
    hitListContainer.innerHTML = accumulatedHTML;
  
    sortHitListByViews();
  }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function sortHitListByViews() {
    const hitListItems = Array.from(hitListContainer.querySelectorAll('.egoHitListItem'));
  
    hitListItems.sort((a, b) => {
      const viewsA = parseInt(a.querySelector('.egoHitListViewCount').textContent.replace(/[^0-9]/g, ''), 10);
      const viewsB = parseInt(b.querySelector('.egoHitListViewCount').textContent.replace(/[^0-9]/g, ''), 10);
  
      return viewsB - viewsA;
    });
  
    hitListContainer.innerHTML = '';
    hitListItems.forEach((item) => {
      hitListContainer.appendChild(item);
    });
  }
  
  setInterval(async () => {
    await updateViewerCountForAllVideos();
  
    await updateAllPages();
  
    sortHitListByViews();
  }, 30000); 

  function createUsernamePopup(username, imageSrc, isFollower) {
    const usernamePopup = document.createElement('div');
    usernamePopup.className = 'egoUserNamePopup';

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    usernamePopup.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - usernamePopup.getBoundingClientRect().left;
        offsetY = event.clientY - usernamePopup.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            usernamePopup.style.left = event.clientX - offsetX + 'px';
            usernamePopup.style.top = event.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    const usernameContent = document.createElement('div');
    usernameContent.className = 'egoUserNameContent';

    usernameContent.innerHTML = `
        <span class="egoCloseButton" onclick="closeUsernamePopup()"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#fff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span> 
        ${imageSrc ? `<img src="${imageSrc}" alt="User Image">` : '<div>No PFP</div>'}
        <div>@${username}</div>
        <button class="egoProfileExpand" onclick="window.open('https://rumble.com/user/${username}', '_blank')">Profile<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#fff" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></button>
        <button class="egoImageExpand" onclick="window.open('${imageSrc}', '_blank')">PFP <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#fff" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></button>
    `;

    const followerText = document.createElement('div');
    followerText.className = 'egoFollowerText';
    followerText.textContent = isFollower ? `@${username} follows the creator.` : `@${username} doesn't follow the creator.`;
    usernamePopup.appendChild(usernameContent);
    usernamePopup.appendChild(followerText);

    document.body.appendChild(usernamePopup);
}

function closeUsernamePopup() {
    const usernamePopup = document.querySelector('.egoUserNamePopup');
    if (usernamePopup) {
        usernamePopup.remove();
    }
}


async function attackVid(videoId) {
  const egoChatContainer = document.createElement('div');
  egoChatContainer.className = 'egoChatContainer';
  egoChatContainer.style.overflowY = 'auto'; 

  let isFirstDataPackage = true; 
  let eventStream; 

  try {
      const eventStreamUrl = `https://web7.rumble.com/chat/api/chat/${videoId}/stream`;
      eventStream = new EventSource(eventStreamUrl);

      eventStream.addEventListener('message', (event) => {
          const eventData = JSON.parse(event.data);

          if (isFirstDataPackage) {
              isFirstDataPackage = false;
              return;
          }

          console.log('Received data:', eventData);

          if (eventData.data && eventData.data.messages) {
              eventData.data.messages.forEach((message) => {
                  if (eventData.data.users && eventData.data.users.length > 0) {
                      const user = eventData.data.users[0];
                      const username = user.username;
                      const text = message.blocks[0].data.text;
                      const imageSrc = user['image.1'] || ''; 
                      const userColor = user.color || getRandomColor(); 
                      const isFollower = user.is_follower || false;

                      const chatItem = document.createElement('div');
                      chatItem.className = 'egoChatItem';

                      const usernameLink = document.createElement('span');
                      usernameLink.className = 'egoUsernameLink';
                      usernameLink.textContent = username;
                      usernameLink.setAttribute('onclick', `createUsernamePopup('${username}', '${imageSrc}', ${isFollower});`);


                      chatItem.innerHTML = `
                          ${imageSrc ? `<img src="${imageSrc}" alt="User Image">` : '<img src="https://cdn.glitch.global/615e2de7-271f-4bf6-8bf1-9c59536d6d4d/blank?v=1703232813006" alt="User Image">'}
                          <div style="max-width: 100%;"><strong style="color: ${userColor}; cursor: pointer; display: inline;">${usernameLink.outerHTML}</strong> ${text}</div>
                      `;

                      egoChatContainer.appendChild(chatItem);
                  }
              });

              egoChatContainer.scrollTop = egoChatContainer.scrollHeight;
          }
      });
  } catch (error) {
      console.error('Error connecting to the event stream:', error);
      egoChatContainer.innerHTML += '<p>Error connecting to the event stream. Please check the console.</p>';
  }



  const egoPopupContainer = document.createElement('div');
  egoPopupContainer.className = 'egoAttackPopup';

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  egoPopupContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - egoPopupContainer.getBoundingClientRect().left;
    offsetY = event.clientY - egoPopupContainer.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      egoPopupContainer.style.left = event.clientX - offsetX + 'px';

      const isScrolledToBottom = egoChatContainer.scrollHeight - egoChatContainer.scrollTop <= egoChatContainer.clientHeight;

      if (isScrolledToBottom) {
        egoPopupContainer.style.top = event.clientY - offsetY + 'px';
      }
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });


  let isAttackActive = false; 

  const closeButton = document.createElement('button');
  closeButton.className = 'egoPopupCloseButton';
  closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#fff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
  closeButton.addEventListener('click', () => {
    if (eventStream) {
      eventStream.close();
    }
    egoPopupContainer.remove(); 
  });
      const attackButton = document.createElement('button');
      attackButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></svg>';
      attackButton.className = 'egoAttackSingle'; 




attackButton.addEventListener('click', async () => {
  if (isAttackActive) {
    isAttackActive = false;
    attackButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"/></svg>';
  } else {
    isAttackActive = true;
    attackButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z"/></svg>';

    const sleepDurationInMillis = sleepDuration;

    while (isAttackActive) {
      await sendAttackRequest(videoId, botMessage);
      await sleep(sleepDurationInMillis);
    }
  }
});

  const inputBox = document.createElement('input');
  inputBox.type = 'text';
  inputBox.placeholder = 'Your message here!';

const sendButton = document.createElement('button');
sendButton.innerHTML = `
  <button class="chat--send" name="send">
    <svg class="chat--send--icon" width="20" height="20" viewBox="0 0 20 20">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.3333 1.6665L9.16663 10.8332"></path>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.3333 1.6665L12.5 18.3332L9.16663 10.8332L1.66663 7.49984L18.3333 1.6665Z" fill="none"></path>
    </svg>
  </button>`;

  sendButton.addEventListener('click', async () => {
    const messageText = inputBox.value;
    
    const requestId = `runByEGO_${generateRandomString(5)}_e9oOnDiscord_${generateRandomString(5)}`;
  
    const requestBody = {
        data: {
            request_id: requestId,
            message: {
                text: messageText
            },
            rant: null,
            channel_id: null
        }
    };

    const u_sCookie = generateRandomString(19); 

    try {
        const response = await fetch(`https://web7.rumble.com/chat/api/chat/${videoId}/message`, {
            method: 'POST',
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en-CA;q=0.9,en;q=0.8,es-US;q=0.7,es-ES;q=0.6,es;q=0.5,ru-RU;q=0.4,ru;q=0.3,de-DE;q=0.2,de;q=0.1,vi-VN;q=0.1,vi;q=0.1",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": `u_s=${u_sCookie}`
            },
            referrer: "https://rumble.com/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(requestBody),
            mode: "cors",
            credentials: "include"
        });
  
        console.log('Message sent. Response:', response);
        
        inputBox.value = '';
    } catch (error) {
        console.error('Error sending message:', error);
    }
});


  

  egoPopupContainer.innerHTML = `<h2>VIDEO ID: ${videoId}</h2>`;

const currentMessageParagraph = document.createElement('p');
currentMessageParagraph.className = 'egoCurrentSetup'; 

currentMessageParagraph.textContent = `Message: ${botMessage}`;

const currentIntervalParagraph = document.createElement('p');
currentIntervalParagraph.className = 'egoCurrentSetup'; 

currentIntervalParagraph.textContent = `Interval: ${sleepDuration} milliseconds`;



egoPopupContainer.appendChild(closeButton);
egoPopupContainer.appendChild(egoChatContainer);
egoPopupContainer.appendChild(currentMessageParagraph);
egoPopupContainer.appendChild(currentIntervalParagraph);
egoPopupContainer.appendChild(attackButton);
egoPopupContainer.appendChild(inputBox);
egoPopupContainer.appendChild(sendButton);
  document.body.appendChild(egoPopupContainer);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let messageSleep = {
  message: "Hello World!",
  sleep: 5000
};

const storedMessageSleep = localStorage.getItem("messageSleep");
if (storedMessageSleep) {
  messageSleep = JSON.parse(storedMessageSleep);
}

let botMessage = messageSleep.message;
let sleepDuration = messageSleep.sleep;

document.getElementById("messageInput").value = botMessage;
document.getElementById("sleepInput").value = sleepDuration;

function saveSettings() {
  const defaultMessage = document.getElementById("messageInput").value;
  const sleepValue = document.getElementById("sleepInput").value;

  botMessage = defaultMessage;
  sleepDuration = parseInt(sleepValue);

  messageSleep.message = botMessage;
  messageSleep.sleep = sleepDuration;

  localStorage.setItem("messageSleep", JSON.stringify(messageSleep));

  console.log("Bot Message:", botMessage);
  console.log("Sleep Duration:", sleepDuration);

  sendAttackRequest(videoId, botMessage, sleepDuration);
}

async function sendAttackRequest(videoId, botMessage, sleepDuration) {
  const requestId = `runByEGO_${generateRandomString(5)}_e9oOnDiscord_${generateRandomString(5)}`;

  const requestBody = {
    data: {
      request_id: requestId,
      message: {
        text: botMessage,
      },
      rant: null,
      channel_id: null,
    },
  };

  try {
    const response = await fetch(`https://web7.rumble.com/chat/api/chat/${videoId}/message`, {
      method: 'POST',
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en-CA;q=0.9,en;q=0.8,es-US;q=0.7,es-ES;q=0.6,es;q=0.5,ru-RU;q=0.4,ru;q=0.3,de-DE;q=0.2,de;q=0.1,vi-VN;q=0.1,vi;q=0.1",
        "content-type": "application/json",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://rumble.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(requestBody),
      mode: "cors",
      credentials: "include"
    });

    console.log(`Message sent for video ${videoId}. Response:`, response);
  } catch (error) {
    console.error(`Error sending message for video ${videoId}:`, error);
  }

  await sleep(sleepDuration);
}



createDraggablePopup();


let isAttacking = false;

document.getElementById('attackAllButton').addEventListener('click', async () => {
  if (isAttacking) {
    stopAllAttacks();
  } else {
    startAllAttacks();
  }
});

async function startAllAttacks() {
  isAttacking = true;

  const allVideoIDs = [...entireVideoIDList];

  console.log('All Video IDs:', allVideoIDs);

  await Promise.all(allVideoIDs.map(videoId => sendAttackRequest(videoId, botMessage, sleepDuration)));

  console.log('Attack All initiated!');
  
  updateButtonText('Stop All Attacks');
}

function stopAllAttacks() {
  isAttacking = false;


  console.log('Stopping All Attacks');

  updateButtonText('Attack All');
}

function updateButtonText(text) {
  document.getElementById('attackAllButton').textContent = text;
}
