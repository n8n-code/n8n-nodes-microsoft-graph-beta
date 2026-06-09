import type { INodeProperties } from 'n8n-workflow';

export const adminAdminWindowsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					]
				}
			},
			"options": [
				{
					"name": "Admin Delete Windows",
					"value": "Admin Delete Windows",
					"action": "Delete navigation property windows for admin",
					"description": "Delete navigation property windows for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows"
						}
					}
				},
				{
					"name": "Admin Get Windows",
					"value": "Admin Get Windows",
					"action": "Get windows from admin",
					"description": "A container for all Windows administrator functionalities. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows"
						}
					}
				},
				{
					"name": "Admin Update Windows",
					"value": "Admin Update Windows",
					"action": "Update the navigation property windows in admin",
					"description": "Update the navigation property windows in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows"
						}
					}
				},
				{
					"name": "Admin Windows Delete Updates",
					"value": "Admin Windows Delete Updates",
					"action": "Delete navigation property updates for admin",
					"description": "Delete navigation property updates for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates"
						}
					}
				},
				{
					"name": "Admin Windows Get Updates",
					"value": "Admin Windows Get Updates",
					"action": "Get updates from admin",
					"description": "Entity that acts as a container for all Windows Update for Business deployment service functionalities. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates"
						}
					}
				},
				{
					"name": "Admin Windows Update Updates",
					"value": "Admin Windows Update Updates",
					"action": "Update the navigation property updates in admin",
					"description": "Update the navigation property updates in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates"
						}
					}
				},
				{
					"name": "Admin Windows Updates Delete Catalog",
					"value": "Admin Windows Updates Delete Catalog",
					"action": "Delete navigation property catalog for admin",
					"description": "Delete navigation property catalog for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/catalog"
						}
					}
				},
				{
					"name": "Admin Windows Updates Get Catalog",
					"value": "Admin Windows Updates Get Catalog",
					"action": "Get catalog from admin",
					"description": "Catalog of content that can be approved for deployment by the deployment service. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/catalog"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Catalog",
					"value": "Admin Windows Updates Update Catalog",
					"action": "Update the navigation property catalog in admin",
					"description": "Update the navigation property catalog in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/catalog"
						}
					}
				},
				{
					"name": "Admin Windows Updates Catalog List Entries",
					"value": "Admin Windows Updates Catalog List Entries",
					"action": "List entries",
					"description": "Get a list of catalogEntry resources from the catalog. Currently, this operation returns entries of the featureUpdateCatalogEntry or qualityUpdateCatalog types, inherited from **catalogEntry**. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/catalog/entries"
						}
					}
				},
				{
					"name": "Admin Windows Updates Catalog Create Entries",
					"value": "Admin Windows Updates Catalog Create Entries",
					"action": "Create new navigation property to entries for admin",
					"description": "Create new navigation property to entries for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/catalog/entries"
						}
					}
				},
				{
					"name": "Admin Windows Updates Catalog Delete Entries",
					"value": "Admin Windows Updates Catalog Delete Entries",
					"action": "Delete navigation property entries for admin",
					"description": "Delete navigation property entries for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/catalog/entries/{{$parameter[\"catalogEntry-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Catalog Get Entries",
					"value": "Admin Windows Updates Catalog Get Entries",
					"action": "Get entries from admin",
					"description": "Lists the content that you can approve for deployment. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/catalog/entries/{{$parameter[\"catalogEntry-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Catalog Update Entries",
					"value": "Admin Windows Updates Catalog Update Entries",
					"action": "Update the navigation property entries in admin",
					"description": "Update the navigation property entries in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/catalog/entries/{{$parameter[\"catalogEntry-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates List Deployment Audiences",
					"value": "Admin Windows Updates List Deployment Audiences",
					"action": "List deploymentAudiences",
					"description": "Get a list of deploymentAudience objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deploymentAudiences"
						}
					}
				},
				{
					"name": "Admin Windows Updates Create Deployment Audiences",
					"value": "Admin Windows Updates Create Deployment Audiences",
					"action": "Create deploymentAudience",
					"description": "Create a new deploymentAudience object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences"
						}
					}
				},
				{
					"name": "Admin Windows Updates Delete Deployment Audiences",
					"value": "Admin Windows Updates Delete Deployment Audiences",
					"action": "Delete navigation property deploymentAudiences for admin",
					"description": "Delete navigation property deploymentAudiences for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Get Deployment Audiences",
					"value": "Admin Windows Updates Get Deployment Audiences",
					"action": "Get deploymentAudiences from admin",
					"description": "The set of updatableAsset resources to which a deployment can apply.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Deployment Audiences",
					"value": "Admin Windows Updates Update Deployment Audiences",
					"action": "Update the navigation property deploymentAudiences in admin",
					"description": "Update the navigation property deploymentAudiences in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences List Exclusions",
					"value": "Admin Windows Updates Deployment Audiences List Exclusions",
					"action": "List deployment audience exclusions",
					"description": "List the updatableAsset resources that are excluded from a deploymentAudience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Create Exclusions",
					"value": "Admin Windows Updates Deployment Audiences Create Exclusions",
					"action": "Create new navigation property to exclusions for admin",
					"description": "Create new navigation property to exclusions for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Delete Exclusions",
					"value": "Admin Windows Updates Deployment Audiences Delete Exclusions",
					"action": "Delete navigation property exclusions for admin",
					"description": "Delete navigation property exclusions for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Get Exclusions",
					"value": "Admin Windows Updates Deployment Audiences Get Exclusions",
					"action": "Get exclusions from admin",
					"description": "Specifies the assets to exclude from the audience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Update Exclusions",
					"value": "Admin Windows Updates Deployment Audiences Update Exclusions",
					"action": "Update the navigation property exclusions in admin",
					"description": "Update the navigation property exclusions in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences List Members",
					"value": "Admin Windows Updates Deployment Audiences List Members",
					"action": "List deployment audience members",
					"description": "List the updatableAsset resources that are members of a deploymentAudience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Create Members",
					"value": "Admin Windows Updates Deployment Audiences Create Members",
					"action": "Create new navigation property to members for admin",
					"description": "Create new navigation property to members for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Delete Members",
					"value": "Admin Windows Updates Deployment Audiences Delete Members",
					"action": "Delete navigation property members for admin",
					"description": "Delete navigation property members for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Get Members",
					"value": "Admin Windows Updates Deployment Audiences Get Members",
					"action": "Get members from admin",
					"description": "Specifies the assets to include in the audience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Update Members",
					"value": "Admin Windows Updates Deployment Audiences Update Members",
					"action": "Update the navigation property members in admin",
					"description": "Update the navigation property members in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates List Deployments",
					"value": "Admin Windows Updates List Deployments",
					"action": "List deployments",
					"description": "Get a list of deployment objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments"
						}
					}
				},
				{
					"name": "Admin Windows Updates Create Deployments",
					"value": "Admin Windows Updates Create Deployments",
					"action": "Create deployment",
					"description": "Create a new deployment object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments"
						}
					}
				},
				{
					"name": "Admin Windows Updates Delete Deployments",
					"value": "Admin Windows Updates Delete Deployments",
					"action": "Delete navigation property deployments for admin",
					"description": "Delete navigation property deployments for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Get Deployments",
					"value": "Admin Windows Updates Get Deployments",
					"action": "Get deployments from admin",
					"description": "Deployments created using the deployment service.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Deployments",
					"value": "Admin Windows Updates Update Deployments",
					"action": "Update the navigation property deployments in admin",
					"description": "Update the navigation property deployments in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Delete Audience",
					"value": "Admin Windows Updates Deployments Delete Audience",
					"action": "Delete navigation property audience for admin",
					"description": "Delete navigation property audience for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Get Audience",
					"value": "Admin Windows Updates Deployments Get Audience",
					"action": "Get audience from admin",
					"description": "Specifies the audience to which content is deployed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Update Audience",
					"value": "Admin Windows Updates Deployments Update Audience",
					"action": "Update the navigation property audience in admin",
					"description": "Update the navigation property audience in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience List Exclusions",
					"value": "Admin Windows Updates Deployments Audience List Exclusions",
					"action": "List deployment audience exclusions",
					"description": "List the updatableAsset resources that are excluded from a deploymentAudience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Create Exclusions",
					"value": "Admin Windows Updates Deployments Audience Create Exclusions",
					"action": "Create new navigation property to exclusions for admin",
					"description": "Create new navigation property to exclusions for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Delete Exclusions",
					"value": "Admin Windows Updates Deployments Audience Delete Exclusions",
					"action": "Delete navigation property exclusions for admin",
					"description": "Delete navigation property exclusions for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Get Exclusions",
					"value": "Admin Windows Updates Deployments Audience Get Exclusions",
					"action": "Get exclusions from admin",
					"description": "Specifies the assets to exclude from the audience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Update Exclusions",
					"value": "Admin Windows Updates Deployments Audience Update Exclusions",
					"action": "Update the navigation property exclusions in admin",
					"description": "Update the navigation property exclusions in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience List Members",
					"value": "Admin Windows Updates Deployments Audience List Members",
					"action": "List deployment audience members",
					"description": "List the updatableAsset resources that are members of a deploymentAudience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Create Members",
					"value": "Admin Windows Updates Deployments Audience Create Members",
					"action": "Create new navigation property to members for admin",
					"description": "Create new navigation property to members for admin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Delete Members",
					"value": "Admin Windows Updates Deployments Audience Delete Members",
					"action": "Delete navigation property members for admin",
					"description": "Delete navigation property members for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Get Members",
					"value": "Admin Windows Updates Deployments Audience Get Members",
					"action": "Get members from admin",
					"description": "Specifies the assets to include in the audience.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Audience Update Members",
					"value": "Admin Windows Updates Deployments Audience Update Members",
					"action": "Update the navigation property members in admin",
					"description": "Update the navigation property members in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates List Resource Connections",
					"value": "Admin Windows Updates List Resource Connections",
					"action": "List resourceConnections",
					"description": "Get a list of the resourceConnection objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/resourceConnections"
						}
					}
				},
				{
					"name": "Admin Windows Updates Create Resource Connections",
					"value": "Admin Windows Updates Create Resource Connections",
					"action": "Create operationalInsightsConnection",
					"description": "Create a new operationalInsightsConnection object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/resourceConnections"
						}
					}
				},
				{
					"name": "Admin Windows Updates Delete Resource Connections",
					"value": "Admin Windows Updates Delete Resource Connections",
					"action": "Delete navigation property resourceConnections for admin",
					"description": "Delete navigation property resourceConnections for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/resourceConnections/{{$parameter[\"resourceConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Get Resource Connections",
					"value": "Admin Windows Updates Get Resource Connections",
					"action": "Get resourceConnections from admin",
					"description": "Service connections to external resources such as analytics workspaces.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/resourceConnections/{{$parameter[\"resourceConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Resource Connections",
					"value": "Admin Windows Updates Update Resource Connections",
					"action": "Update the navigation property resourceConnections in admin",
					"description": "Update the navigation property resourceConnections in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/resourceConnections/{{$parameter[\"resourceConnection-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates List Updatable Assets",
					"value": "Admin Windows Updates List Updatable Assets",
					"action": "List updatableAssets",
					"description": "Get a list of updatableAsset objects and their properties. Listing updatable assets returns **updatableAsset** resources of the following derived types: azureADDevice and updatableAssetGroup. Use list azureADDevice resources or list updatableAssetGroup resources to filter and get resources of only one of the derived types.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatableAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Create Updatable Assets",
					"value": "Admin Windows Updates Create Updatable Assets",
					"action": "Create updatableAssetGroup",
					"description": "Create a new updatableAssetGroup object. The **updatableAssetGroup** resource inherits from updatableAsset.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Delete Updatable Assets",
					"value": "Admin Windows Updates Delete Updatable Assets",
					"action": "Delete navigation property updatableAssets for admin",
					"description": "Delete navigation property updatableAssets for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Get Updatable Assets",
					"value": "Admin Windows Updates Get Updatable Assets",
					"action": "Get updatableAssets from admin",
					"description": "Assets registered with the deployment service that can receive updates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Updatable Assets",
					"value": "Admin Windows Updates Update Updatable Assets",
					"action": "Update the navigation property updatableAssets in admin",
					"description": "Update the navigation property updatableAssets in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates List Update Policies",
					"value": "Admin Windows Updates List Update Policies",
					"action": "List updatePolicy",
					"description": "Get a list of updatePolicy objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatePolicies"
						}
					}
				},
				{
					"name": "Admin Windows Updates Create Update Policies",
					"value": "Admin Windows Updates Create Update Policies",
					"action": "Create updatePolicy",
					"description": "Create a new updatePolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatePolicies"
						}
					}
				},
				{
					"name": "Admin Windows Updates Delete Update Policies",
					"value": "Admin Windows Updates Delete Update Policies",
					"action": "Delete navigation property updatePolicies for admin",
					"description": "Delete navigation property updatePolicies for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Get Update Policies",
					"value": "Admin Windows Updates Get Update Policies",
					"action": "Get updatePolicies from admin",
					"description": "A collection of policies for approving the deployment of different content to an audience over time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Update Policies",
					"value": "Admin Windows Updates Update Update Policies",
					"action": "Update the navigation property updatePolicies in admin",
					"description": "Update the navigation property updatePolicies in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies Get Audience",
					"value": "Admin Windows Updates Update Policies Get Audience",
					"action": "Get audience from admin",
					"description": "Specifies the audience to target.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/audience"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies List Compliance Changes",
					"value": "Admin Windows Updates Update Policies List Compliance Changes",
					"action": "List complianceChanges",
					"description": "Get a list of the complianceChange objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/complianceChanges"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies Create Compliance Changes",
					"value": "Admin Windows Updates Update Policies Create Compliance Changes",
					"action": "Create contentApproval",
					"description": "Create a new contentApproval object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/complianceChanges"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies Delete Compliance Changes",
					"value": "Admin Windows Updates Update Policies Delete Compliance Changes",
					"action": "Delete navigation property complianceChanges for admin",
					"description": "Delete navigation property complianceChanges for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/complianceChanges/{{$parameter[\"complianceChange-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies Get Compliance Changes",
					"value": "Admin Windows Updates Update Policies Get Compliance Changes",
					"action": "Get complianceChanges from admin",
					"description": "Compliance changes like content approvals which result in the automatic creation of deployments using the audience and deploymentSettings of the policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/complianceChanges/{{$parameter[\"complianceChange-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies Update Compliance Changes",
					"value": "Admin Windows Updates Update Policies Update Compliance Changes",
					"action": "Update the navigation property complianceChanges in admin",
					"description": "Update the navigation property complianceChanges in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/complianceChanges/{{$parameter[\"complianceChange-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Windows Updates Update Policies Compliance Changes Get Update Policy",
					"value": "Admin Windows Updates Update Policies Compliance Changes Get Update Policy",
					"action": "Get updatePolicy from admin",
					"description": "The policy this compliance change is a member of.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/windows/updates/updatePolicies/{{$parameter[\"updatePolicy-id\"]}}/complianceChanges/{{$parameter[\"complianceChange-id\"]}}/updatePolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /admin/windows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Delete Windows"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Delete Windows"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Get Windows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Get Windows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Get Windows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Update Windows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Update Windows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Delete Updates"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Delete Updates"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Get Updates"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Get Updates"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Get Updates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Update Updates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Update Updates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/catalog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Catalog"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Catalog"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/catalog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Catalog"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Catalog"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Catalog"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/catalog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Catalog"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/catalog<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Catalog"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/catalog/entries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog List Entries"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/catalog/entries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Create Entries"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/catalog/entries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Create Entries"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/catalog/entries/{catalogEntry-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Delete Entries"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Delete Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/catalog/entries/{catalogEntry-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Get Entries"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Get Entries"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Get Entries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Update Entries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/catalog/entries/{catalogEntry-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Catalog Update Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deploymentAudiences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Deployment Audiences"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Create Exclusions"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Create Exclusions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Delete Exclusions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Delete Exclusions"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Get Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Get Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Get Exclusions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Update Exclusions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Update Exclusions"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Delete Members"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Get Members"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Get Members"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Deployments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deployments/{deployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Deployments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Deployments"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments/{deployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Deployments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Deployments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Deployments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Deployments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Deployments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deployments/{deployment-id}/audience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Delete Audience"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Delete Audience"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments/{deployment-id}/audience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Get Audience"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Get Audience"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Get Audience"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}/audience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Update Audience"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}/audience<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Update Audience"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Exclusions"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Create Exclusions"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Create Exclusions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Delete Exclusions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Delete Exclusions"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Get Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Get Exclusions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Get Exclusions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Update Exclusions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Update Exclusions"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments/{deployment-id}/audience/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Delete Members"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Get Members"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Get Members"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Deployments Audience Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/resourceConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/resourceConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/resourceConnections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/resourceConnections/{resourceConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/resourceConnections/{resourceConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/resourceConnections/{resourceConnection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Resource Connections"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatableAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/updatableAssets/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatableAssets/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/updatableAssets/{updatableAsset-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Updatable Assets"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates List Update Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Update Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Create Update Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Update Policies"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Delete Update Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatePolicies/{updatePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Update Policies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Get Update Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Update Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Update Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/audience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Get Audience"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Get Audience"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Get Audience"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies List Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Create Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Create Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Delete Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Delete Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Get Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Get Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Get Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Update Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Update Compliance Changes"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/windows/updates/updatePolicies/{updatePolicy-id}/complianceChanges/{complianceChange-id}/updatePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Compliance Changes Get Update Policy"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Compliance Changes Get Update Policy"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Windows"
					],
					"operation": [
						"Admin Windows Updates Update Policies Compliance Changes Get Update Policy"
					]
				}
			}
		},
];
