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
    try {
        let files = fs.readdirSync(TMP_PATH)
        for (let file of files) {
            fs.unlinkSync(`TMP_PATH/${file}`)
        }
    } catch (err) {
        console.error(err);
    }
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
    if (!validator.isJSON(vars)) {
        throw Error(`invalid json obj passed! - ${vars}`);
    }
    try {
        fs.fs.writeFileSync(`TMP_PATH/terraform.tfvars`, JSON.stringify(vars,null,4));
    } catch (err) {
        console.error(err)
    }
}

module.exports = { execCmd, cleanTmpDir, copyTemplateFilesTotmp, createTerraformVariablesFile } 