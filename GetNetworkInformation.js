// Get the ip address of the user and return it as a string in the format of "xxx.xxx.xxx.xxx" 
// Get public ip address of the user and return it as a string in the format of "xxx.xxx.xxx.xxx" from api.ipify.org


console.log("Network and Computer information");

function getPublicIP() {
    var request = require('request');
    request('http://api.ipify.org?format=json', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var ip = JSON.parse(body).ip;
            console.log("Current public ip address is: " + ip);
        }
    });
}

function getIP() {
    var ip = "";
    var ifaces = require('os').networkInterfaces();
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if (details.family === 'IPv4' && details.address !== '') {
                ip = details.address;
            }
        });
    }
    console.log("Current local ip address is: " + ip);
    return ip;
}

function getMac() {
    var ifaces = require('os').networkInterfaces();
    var mac = "";
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if (details.family === 'IPv4' && details.address !== '') {
                mac = details.mac;
            }
        });
    }
    console.log("Current local mac address is: " + mac);
    return mac;
}

function getHostname() {
    var hostname = require('os').hostname();
    console.log("Current local hostname is: " + hostname);
    return hostname;
}

function getUser() {
    var user = require('os').userInfo().username;
    console.log("Current local user name is: " + user);
    return user;
}

function getComputerName() {
    var computerName = require('os').hostname();
    console.log("Current local computer name is: " + computerName);
    return computerName;
}

function getOS() {
    var os = require('os').type();
    console.log("Current local computer OS is: " + os);
    return os;
}

function getOSVersion() {
    var version = require('os').release();
    console.log("Current local computer OS version is: " + version);
    return version;
}


function getCPU() {
    var cpu = require('os').cpus()[0].model;
    console.log("Current local computer CPU is: " + cpu);
    return cpu;
}

function getCPUCores() {
    var cores = require('os').cpus().length;
    console.log("Current local computer CPU cores is: " + cores);
    return cores;
}

function getCPUFrequency() {
    var frequency = require('os').cpus()[0].speed;
    console.log("Current local computer CPU frequency is: " + frequency);
    return frequency;
}

function getMemory() {
    var memory = require('os').totalmem();
    console.log("Current local computer memory is: " + memory);
    return memory;
}

// return internet speed of the network
function getNetworkSpeed() {    
    var ifaces = require('os').networkInterfaces();
    var speed = "";
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details) {
            if (details.family === 'IPv4' && details.address !== '') {
                speed = details.speed;
            }
        });
    }
    console.log("Current network speed is: " + speed);
    return speed;
}

function callAllFunctions() {
    getPublicIP();
    getIP();
    getNetworkSpeed();
    getMemory();
    getMac();
    getHostname();
    getUser();
    getComputerName();
    getOS();
    getOSVersion();
    getCPU();
    getCPUCores();
    getCPUFrequency();

}

callAllFunctions();