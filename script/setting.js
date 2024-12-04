document.getElementById('saveButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const dashboard = document.getElementById('dashboard').value;
    const emailNotifications = document.getElementById('emailNotifications').checked;
    const smsNotifications = document.getElementById('smsNotifications').checked;
    const language = document.getElementById('language').value;

    const settings = {
        username,
        role,
        dashboard,
        emailNotifications,
        smsNotifications,
        language
    };

    console.log('User  Settings Saved:', settings);
    alert('Settings saved successfully!');
});