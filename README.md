# Raisely Deploy
<a href="https://img.shields.io/github/v/release/raisely/deploy"><img alt="release" src="https://img.shields.io/github/v/release/raisely/deploy"></a>
<a href="https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg"><img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg"></a>

A GitHub Action to deploy custom components to a Raisely campaign. Best used in conjunction with the [Raisely CLI](https://github.com/raisely/cli) and local development.

## Usage

Use this action within a GitHub repository containing the folder output of the Raisely CLI. Your repository should have a `components` and `stylesheets` folder.

To set up this action:

1. Create a `.github/workflows/raisely-deploy.yml` file in your GitHub repo.
2. Add the following code to the `raisely-deploy.yml` file.

```
on: push
name: Raisely Deploy Demo
jobs:
  raiselyDeploy:
    name: Raisely Deploy
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Raisely Deploy
      uses: raisely/deploy@v1
      with:
        campaign: ${{ secrets.RAISELY_CAMPAIGN }}
        apikey: ${{ secrets.RAISELY_API_KEY }}
```

## Variables
The Raisely deploy action requires two variables to be passed in as inputs. They are:

`campaign`: The UUID of the Raisely campaign you'd like to deploy. *Note: Components are not scoped per campaign, so will be deployed across your whole Raisely account.*
`apikey`: The API key for your Raisely account. You can find this under Settings > API & Webhooks.

## License

[MIT](LICENSE.md)

## Contributing

Pull requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for more.
