const Token = artifacts.require('VestedToken');

async function deployTestnet(deployer) {
    const tkn = await deployer.deploy(Token,"482000000000","514210590729460000000000"); //482 gwei, 514,210.6 VTKN
    console.log('Deployed Token at ' + tkn.address);
    await tkn.addSender("0x000000000"); // Add the token master address
    console.log("Added you as a sender");
    await tkn.setLaunchPrice("2333674221485"); // If 1 ETH = X VTKN at launch, set this as 10^18/X 
    console.log("Set the launch price");
}

module.exports = function(deployer) {
    deployer.then(async() => {
        console.log(deployer.network);
        await deployTestnet(deployer);
    })
}