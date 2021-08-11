const { alert, error } = require('./lib/dialogs.js')

const showAlert = async () => {
  await alert(
    'Connect to the internet',
    'In order to function correctly, this plugin requires access to the Internet. Please connect to a network that has Internet access.'
  )
}

const showError = async () => {
  await error(
    'Synchronization Failed',
    'Failed to synchronize all your changes with our server. Some changes may have been lost.',
    'Steps you can take:',
    '* Save your document',
    '* Check your network connection',
    '* Try again in a few minutes'
  )
}

module.exports = {
  commands: {
    showAlert,
    showError
  }
}