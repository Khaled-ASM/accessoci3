const fdk			= require('@fnproject/fdk');
const common        = require("oci-common");
const identity      = require("oci-identity");

fdk.handle(async function(input, ctx){
	//try {
		let jiraClientId	= 0;
		let jiraClientSecret= 0;
		const provider = common.ResourcePrincipalAuthenticationDetailsProvider.builder();
		//const provider 		= new common.ResourcePrincipalAuthenticationDetailsProvider();
		//(async () => {
		//const identityClient 	  = await new identity.IdentityClient({authenticationDetailsProvider: provider});
		
		//const provider 			= new common.ResourcePrincipalAuthenticationDetailsProvider();
        //const identityClient 	= new identity.IdentityClient({ authenticationDetailsProvider: provider });
		const ociVaultName        = "IBA Vault";
		const ociCompartmentName  = "NONPROD-Oracle-Integration-CMP";
		console.log("TenantId: " + provider.getTenantId())
		console.log("Check log Printed or not !!!!");
		//})();
		return {"tenantId": provider.getTenantId()}; //provider.getTenantId()
	//} catch (error) {
	//	console.error('Error fetching data:', error);
	//	return error;
	//}
})
