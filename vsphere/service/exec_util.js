'use strict'

const fs = require('fs-extra');
const path = require('path');
const validator = require('validator');
const { spawnSync } = require('child_process');

const TMP_PATH = path.join(__dirname, '../../tmp')
const TEMPLATE_PATH = path.join(__dirname, '../template/')

//refer link - https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js
function execCmd(cmd) {
    return spawnSync(cmd);
}

function cleanTmpDir() {
    fs.readdir(TMP_PATH, (err, files) => {
        if (err) throw err;

        for (let file of files) {
            fs.unlink(TMP_PATH, file), err => {
                if (err) throw err;
            };
        }
    });
    return this;
}

function copyTemplateFilesTotmp() {
    try {
        fs.copySync(TEMPLATE_PATH, TMP_PATH);
        console.log('All files copied!');
    } catch (err) {
        console.error(err)
    }
    return this;
}

function createTerraformVariablesFile(vars) {
    if (!validator.isJSON(vars)){
        throw Error (`invalid json obj passed! - ${vars}`);
    }
    try {
        fs.createFile(`TMP_PATH/terraform.tfvars`, vars, (err) => {
            console.error(err);
        })
    } catch (err) {
        console.error(err)
    }
}

module.exports = { execCmd, cleanTmpDir, copyTemplateFilesTotmp, createTerraformVariablesFile } 