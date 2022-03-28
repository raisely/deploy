const core = require('@actions/core');
const wait = require('./runner');
const { exec } = require("child_process");

// most @actions toolkit packages have async methods
async function run () {
  try {
    const campaignUuid = core.getInput('campaign');
    const apiKey = core.getInput('apikey');

    core.info(`Waiting ${ms} milliseconds ...`);

    await new Promise((resolve, reject) => {
      exec(`RAISELY_TOKEN=${apiKey} RAISELY_CAMPAIGNS=${campaignUuid} ./node_modules/@raisely/cli/bin/raisely deploy`, (error, stdout, stderr) => {
        if (error) {
          reject(error)
        }
        console.log(stdout);
        resolve();
      });
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
