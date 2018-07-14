'use strict'

const { spawnSync} = require('child_process');
const  eu  = require('./exec_util');

function Terraform4Vsphere() { 
    
}

Terraform4Vsphere.prototype.apply = function() {
    let result = spawnSync("terraform apply -input=false tfplan -auto-approve");
    
    console.log('error', result.error);
    console.log('stdout ', result.stdout);
    console.log('stderr ', result.stderr);
}

Terraform4Vsphere.prototype.plan = function() {
    let result = spawnSync("terraform plan -out=tfplan -input=false");

    console.log('error', result.error);
    console.log('stdout ', result.stdout);
    console.log('stderr ', result.stderr);
}


Terraform4Vsphere.prototype.createVM = function(options){
    eu.cleanTmpDir();
    eu.copyTemplateFilesTotmp();
    eu.createTerraformVariablesFile(options);
    this.plan();
    this.apply();
}

Terraform4Vsphere.prototype.cloneVM = function(tfstateFile) {
    eu.cleanTmpDir();
    eu.copyTemplateFilesTotmp();
    //explore
    this.apply();
}

Terraform4Vsphere.prototype.deletVM = function() {

}

Terraform4Vsphere.prototype.getOutputs = function(param) {
    return spawnSync(`terraform output ${param}`);
}

module.exports = { Terraform4Vsphere }