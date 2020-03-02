const githubUsername = process.env.REACT_APP_GITHUB_NAME;
const githubPassword = process.env.REACT_APP_GITHUB_PW;

const githubRequestSetting = {
	headers: {
		Authorization: "Basic " + btoa(`${githubUsername}:${githubPassword}`)
	}
};

export default githubRequestSetting;
