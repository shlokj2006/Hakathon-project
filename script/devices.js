const deviceTableBody = document.querySelector('#deviceTable tbody');
const devices = [];

// Function to render the device table
function renderDeviceTable() {
    deviceTableBody.innerHTML = ''; // Clear existing rows
    devices.forEach(device => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${device.id}</td>
            <td>${device.type}</td>
            <td>${device.status}</td>
            <td>${device.health || 'N/A'}</td>
        `;
        deviceTableBody.appendChild(row);
    });
}

// Function to add a device
function addDevice() {
    const deviceId = document.getElementById('deviceId').value.trim();
    const deviceType = document.getElementById('deviceType').value.trim();
    const deviceStatus = document.getElementById('deviceStatus').value;

    if (!deviceId || !deviceType) {
        alert('Device ID and Type are required.');
        return;
    }

    const newDevice = { id: deviceId, type: deviceType, status: deviceStatus, health: 'Good' };
    devices.push(newDevice);
    renderDeviceTable();
    clearInputs();
}

// Function to update a device
function updateDevice() {
    const deviceId = document.getElementById('deviceId').value.trim();
    const deviceType = document.getElementById('deviceType').value.trim();
    const deviceStatus = document.getElementById('deviceStatus').value;

    const deviceIndex = devices.findIndex(device => device.id === deviceId);
    if (deviceIndex === -1) {
        alert('Device not found.');
        return;
    }

    devices[deviceIndex] = { id: deviceId, type: deviceType, status: deviceStatus, health: devices[deviceIndex].health };
    renderDeviceTable();
    clearInputs();
}

// Function to remove a device
function removeDevice() {
    const deviceId = document.getElementById('deviceId').value.trim();
    const deviceIndex = devices.findIndex(device => device.id === deviceId);

    if (deviceIndex === -1) {
        alert('Device not found.');
        return;
    }

    devices.splice(deviceIndex, 1);
    renderDeviceTable();
    clearInputs();
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('deviceId').value = '';
    document.getElementById('deviceType').value = '';
    document.getElementById('deviceStatus').value = 'online';
}

// Event listeners for buttons
document.getElementById('addDeviceButton').addEventListener('click', addDevice);
document.getElementById('updateDeviceButton').addEventListener('click', updateDevice);
document.getElementById('removeDeviceButton').addEventListener('click', removeDevice);

// Function to update firmware (placeholder)
document.getElementById('updateFirmwareButton').addEventListener('click', function() {
    const firmwareVersion = document.getElementById('firmwareVersion').value.trim();
    if (!firmwareVersion) {
        alert('Please enter a firmware version.');
        return;
    }
    alert(`Firmware updated to version: ${firmwareVersion}`);
});

// Function to schedule maintenance (placeholder)
document.getElementById('scheduleMaintenanceButton').addEventListener('click', function() {
    const maintenanceDate = document.getElementById('maintenanceDate').value;
    if (!maintenanceDate) {
        alert('Please select a maintenance date.');
        return;
    }
    alert(`Maintenance scheduled for: ${maintenanceDate}`);
});