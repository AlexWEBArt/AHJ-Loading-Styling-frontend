// import background from '../img/cell.jpg';
// import CreateInstance from './CreateInstance';
// import CreateLog from './CreateLog';
// import SubscriptionApi from './SubscriptionApi';

// document.querySelector('body').style.backgroundImage = `url(${background})`;

// const URL = 'cloud-dashboard-backend.onrender.com/';

// const containerInstances = document.querySelector('.instances-box');
// const containerLogs = document.querySelector('.logs-box');

// const instanceFactory = new CreateInstance(URL, containerInstances);
// const logsFactory = new CreateLog(containerLogs, instanceFactory);

// window.api = new SubscriptionApi(URL, instanceFactory, containerInstances);
// logsFactory.connectingToSSE(URL);

// const addInstance = document.querySelector('.new-instance');

// window.api.renderInstances();

// addInstance.addEventListener('click', () => {
//   window.api.generationLoading();
//   window.api.addInstance();
// });

if (navigator.serviceWorker) {
  window.addEventListener('load', async () => {
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register(
          '/service.worker.js',
        );
        console.log('sw registered');
      }
      // await registration.unregister();
    } catch (e) {
      console.log(e);
    }
  });
}
