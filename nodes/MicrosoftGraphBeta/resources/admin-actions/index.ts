import type { INodeProperties } from 'n8n-workflow';

export const adminActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					]
				}
			},
			"options": [
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Browser Site List Publish",
					"value": "Admin Edge Internet Explorer Mode Site Lists Browser Site List Publish",
					"action": "Invoke action publish",
					"description": "Publish the specified browserSiteList for devices to download.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Archive",
					"value": "Admin Service Announcement Messages Archive",
					"action": "Invoke action archive",
					"description": "Archive a list of serviceUpdateMessages for the signed in user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/microsoft.graph.archive"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Favorite",
					"value": "Admin Service Announcement Messages Favorite",
					"action": "Invoke action favorite",
					"description": "Change the status of a list of serviceUpdateMessages to favorite for the signed in user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/microsoft.graph.favorite"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Mark Read",
					"value": "Admin Service Announcement Messages Mark Read",
					"action": "Invoke action markRead",
					"description": "Mark a list of serviceUpdateMessages as **read** for the signed in user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/microsoft.graph.markRead"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Mark Unread",
					"value": "Admin Service Announcement Messages Mark Unread",
					"action": "Invoke action markUnread",
					"description": "Mark a list of serviceUpdateMessages as **unread** for the signed in user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/microsoft.graph.markUnread"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Unarchive",
					"value": "Admin Service Announcement Messages Unarchive",
					"action": "Invoke action unarchive",
					"description": "Unarchive a list of serviceUpdateMessages for the signed in user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/microsoft.graph.unarchive"
						}
					}
				},
				{
					"name": "Admin Service Announcement Messages Unfavorite",
					"value": "Admin Service Announcement Messages Unfavorite",
					"action": "Invoke action unfavorite",
					"description": "Remove the favorite status of serviceUpdateMessages for the signed in user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/serviceAnnouncement/messages/microsoft.graph.unfavorite"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets",
					"action": "Invoke action enrollAssets",
					"description": "Invoke action enrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/microsoft.graph.windowsUpdates.enrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets By Id",
					"action": "Invoke action enrollAssetsById",
					"description": "Invoke action enrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/microsoft.graph.windowsUpdates.enrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets",
					"action": "Invoke action unenrollAssets",
					"description": "Invoke action unenrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/microsoft.graph.windowsUpdates.unenrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets By Id",
					"action": "Invoke action unenrollAssetsById",
					"description": "Invoke action unenrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/microsoft.graph.windowsUpdates.unenrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members",
					"action": "Invoke action addMembers",
					"description": "Add members to an updatableAssetGroup. You can add azureADDevice resources as members, but may not add **updatableAssetGroup** resources as members. Adding an Azure AD device as a member of an updatable asset group automatically creates an **azureADDevice** object, if it does not already exist. You can also use the method addMembersById to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members By Id",
					"action": "Invoke action addMembersById",
					"description": "Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members",
					"action": "Invoke action removeMembers",
					"description": "Remove members from an updatableAssetGroup. You can also use the method removeMembersById to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members By Id",
					"action": "Invoke action removeMembersById",
					"description": "Remove members of the same type from an updatableAssetGroup. You can also use the method removeMembers to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets",
					"action": "Invoke action enrollAssets",
					"description": "Invoke action enrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/microsoft.graph.windowsUpdates.enrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets By Id",
					"action": "Invoke action enrollAssetsById",
					"description": "Invoke action enrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/microsoft.graph.windowsUpdates.enrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets",
					"action": "Invoke action unenrollAssets",
					"description": "Invoke action unenrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/microsoft.graph.windowsUpdates.unenrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets By Id",
					"action": "Invoke action unenrollAssetsById",
					"description": "Invoke action unenrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/microsoft.graph.windowsUpdates.unenrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members",
					"action": "Invoke action addMembers",
					"description": "Add members to an updatableAssetGroup. You can add azureADDevice resources as members, but may not add **updatableAssetGroup** resources as members. Adding an Azure AD device as a member of an updatable asset group automatically creates an **azureADDevice** object, if it does not already exist. You can also use the method addMembersById to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members By Id",
					"action": "Invoke action addMembersById",
					"description": "Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members",
					"action": "Invoke action removeMembers",
					"description": "Remove members from an updatableAssetGroup. You can also use the method removeMembersById to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members By Id",
					"action": "Invoke action removeMembersById",
					"description": "Remove members of the same type from an updatableAssetGroup. You can also use the method removeMembers to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Update Audience",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Update Audience",
					"action": "Invoke action updateAudience",
					"description": "Update the members and exclusions collections of a deploymentAudience. Adding an azureADDevice to the members or exclusions collections of a deployment audience automatically creates an Azure AD device object, if it does not already exist. If the same updatableAsset gets included in the **exclusions** and **members** collections of a **deploymentAudience**, deployment will not apply to that asset. If all **updatableAsset** objects are the same type, you can also use the method updateAudienceById to update the **deploymentAudience**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/microsoft.graph.windowsUpdates.updateAudience"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id",
					"value": "Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id",
					"action": "Invoke action updateAudienceById",
					"description": "Update the members and exclusions collections of a deploymentAudience with updatableAsset resources of the same type. Adding an azureADDevice to the members or exclusions collections of a deployment audience automatically creates an Azure AD device object if it does not already exist. If the same updatableAsset gets included in the **exclusions** and **members** collections of a **deploymentAudience**, deployment will not apply to that asset. You can also use the method updateAudience to update the **deploymentAudience**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deploymentAudiences/{{$parameter[\"deploymentAudience-id\"]}}/microsoft.graph.windowsUpdates.updateAudienceById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets",
					"action": "Invoke action enrollAssets",
					"description": "Invoke action enrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/microsoft.graph.windowsUpdates.enrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets By Id",
					"action": "Invoke action enrollAssetsById",
					"description": "Invoke action enrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/microsoft.graph.windowsUpdates.enrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets",
					"action": "Invoke action unenrollAssets",
					"description": "Invoke action unenrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/microsoft.graph.windowsUpdates.unenrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets By Id",
					"action": "Invoke action unenrollAssetsById",
					"description": "Invoke action unenrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/microsoft.graph.windowsUpdates.unenrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members",
					"action": "Invoke action addMembers",
					"description": "Add members to an updatableAssetGroup. You can add azureADDevice resources as members, but may not add **updatableAssetGroup** resources as members. Adding an Azure AD device as a member of an updatable asset group automatically creates an **azureADDevice** object, if it does not already exist. You can also use the method addMembersById to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members By Id",
					"action": "Invoke action addMembersById",
					"description": "Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members",
					"action": "Invoke action removeMembers",
					"description": "Remove members from an updatableAssetGroup. You can also use the method removeMembersById to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members By Id",
					"action": "Invoke action removeMembersById",
					"description": "Remove members of the same type from an updatableAssetGroup. You can also use the method removeMembers to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/exclusions/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Enroll Assets",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Enroll Assets",
					"action": "Invoke action enrollAssets",
					"description": "Invoke action enrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/microsoft.graph.windowsUpdates.enrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Enroll Assets By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Enroll Assets By Id",
					"action": "Invoke action enrollAssetsById",
					"description": "Invoke action enrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/microsoft.graph.windowsUpdates.enrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets",
					"action": "Invoke action unenrollAssets",
					"description": "Invoke action unenrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/microsoft.graph.windowsUpdates.unenrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets By Id",
					"action": "Invoke action unenrollAssetsById",
					"description": "Invoke action unenrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/microsoft.graph.windowsUpdates.unenrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members",
					"action": "Invoke action addMembers",
					"description": "Add members to an updatableAssetGroup. You can add azureADDevice resources as members, but may not add **updatableAssetGroup** resources as members. Adding an Azure AD device as a member of an updatable asset group automatically creates an **azureADDevice** object, if it does not already exist. You can also use the method addMembersById to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members By Id",
					"action": "Invoke action addMembersById",
					"description": "Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members",
					"action": "Invoke action removeMembers",
					"description": "Remove members from an updatableAssetGroup. You can also use the method removeMembersById to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members By Id",
					"action": "Invoke action removeMembersById",
					"description": "Remove members of the same type from an updatableAssetGroup. You can also use the method removeMembers to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/members/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Update Audience",
					"value": "Admin Windows Updates Deployments Deployment Audience Update Audience",
					"action": "Invoke action updateAudience",
					"description": "Update the members and exclusions collections of a deploymentAudience. Adding an azureADDevice to the members or exclusions collections of a deployment audience automatically creates an Azure AD device object, if it does not already exist. If the same updatableAsset gets included in the **exclusions** and **members** collections of a **deploymentAudience**, deployment will not apply to that asset. If all **updatableAsset** objects are the same type, you can also use the method updateAudienceById to update the **deploymentAudience**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/microsoft.graph.windowsUpdates.updateAudience"
						}
					}
				},
				{
					"name": "Admin Windows Updates Deployments Deployment Audience Update Audience By Id",
					"value": "Admin Windows Updates Deployments Deployment Audience Update Audience By Id",
					"action": "Invoke action updateAudienceById",
					"description": "Update the members and exclusions collections of a deploymentAudience with updatableAsset resources of the same type. Adding an azureADDevice to the members or exclusions collections of a deployment audience automatically creates an Azure AD device object if it does not already exist. If the same updatableAsset gets included in the **exclusions** and **members** collections of a **deploymentAudience**, deployment will not apply to that asset. You can also use the method updateAudience to update the **deploymentAudience**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/deployments/{{$parameter[\"deployment-id\"]}}/audience/microsoft.graph.windowsUpdates.updateAudienceById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Enroll Assets",
					"value": "Admin Windows Updates Updatable Assets Enroll Assets",
					"action": "Invoke action enrollAssets",
					"description": "Invoke action enrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.enrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Enroll Assets By Id",
					"value": "Admin Windows Updates Updatable Assets Enroll Assets By Id",
					"action": "Invoke action enrollAssetsById",
					"description": "Invoke action enrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.enrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Unenroll Assets",
					"value": "Admin Windows Updates Updatable Assets Unenroll Assets",
					"action": "Invoke action unenrollAssets",
					"description": "Invoke action unenrollAssets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.unenrollAssets"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Unenroll Assets By Id",
					"value": "Admin Windows Updates Updatable Assets Unenroll Assets By Id",
					"action": "Invoke action unenrollAssetsById",
					"description": "Invoke action unenrollAssetsById",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.unenrollAssetsById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Updatable Asset Add Members",
					"value": "Admin Windows Updates Updatable Assets Updatable Asset Add Members",
					"action": "Invoke action addMembers",
					"description": "Add members to an updatableAssetGroup. You can add azureADDevice resources as members, but may not add **updatableAssetGroup** resources as members. Adding an Azure AD device as a member of an updatable asset group automatically creates an **azureADDevice** object, if it does not already exist. You can also use the method addMembersById to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Updatable Asset Add Members By Id",
					"value": "Admin Windows Updates Updatable Assets Updatable Asset Add Members By Id",
					"action": "Invoke action addMembersById",
					"description": "Add members of the same type to an updatableAssetGroup. You can also use the method addMembers to add members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.addMembersById"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Updatable Asset Remove Members",
					"value": "Admin Windows Updates Updatable Assets Updatable Asset Remove Members",
					"action": "Invoke action removeMembers",
					"description": "Remove members from an updatableAssetGroup. You can also use the method removeMembersById to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembers"
						}
					}
				},
				{
					"name": "Admin Windows Updates Updatable Assets Updatable Asset Remove Members By Id",
					"value": "Admin Windows Updates Updatable Assets Updatable Asset Remove Members By Id",
					"action": "Invoke action removeMembersById",
					"description": "Remove members of the same type from an updatableAssetGroup. You can also use the method removeMembers to remove members.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/windows/updates/updatableAssets/{{$parameter[\"updatableAsset-id\"]}}/microsoft.graph.windowsUpdates.removeMembersById"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Browser Site List Publish"
					]
				}
			}
		},
		{
			"displayName": "Revision",
			"name": "revision",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "revision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Browser Site List Publish"
					]
				}
			}
		},
		{
			"displayName": "Shared Cookies",
			"name": "sharedCookies",
			"type": "json",
			"default": "[\n  {\n    \"history\": [\n      {\n        \"lastModifiedBy\": {\n          \"application\": {},\n          \"device\": {},\n          \"user\": {}\n        }\n      }\n    ],\n    \"lastModifiedBy\": {},\n    \"sourceEnvironment\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "sharedCookies",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Browser Site List Publish"
					]
				}
			}
		},
		{
			"displayName": "Sites",
			"name": "sites",
			"type": "json",
			"default": "[\n  {\n    \"history\": [\n      {\n        \"compatibilityMode\": {},\n        \"lastModifiedBy\": {\n          \"application\": {},\n          \"device\": {},\n          \"user\": {}\n        }\n      }\n    ],\n    \"lastModifiedBy\": {},\n    \"mergeType\": {},\n    \"targetEnvironment\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "sites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Browser Site List Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/microsoft.graph.archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Archive"
					]
				}
			}
		},
		{
			"displayName": "Message Ids",
			"name": "messageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "messageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/microsoft.graph.favorite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Favorite"
					]
				}
			}
		},
		{
			"displayName": "Message Ids",
			"name": "messageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "messageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Favorite"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/microsoft.graph.markRead",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Mark Read"
					]
				}
			}
		},
		{
			"displayName": "Message Ids",
			"name": "messageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "messageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Mark Read"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/microsoft.graph.markUnread",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Mark Unread"
					]
				}
			}
		},
		{
			"displayName": "Message Ids",
			"name": "messageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "messageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Mark Unread"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/microsoft.graph.unarchive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Unarchive"
					]
				}
			}
		},
		{
			"displayName": "Message Ids",
			"name": "messageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "messageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Unarchive"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/serviceAnnouncement/messages/microsoft.graph.unfavorite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Unfavorite"
					]
				}
			}
		},
		{
			"displayName": "Message Ids",
			"name": "messageIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "messageIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Service Announcement Messages Unfavorite"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/microsoft.graph.windowsUpdates.enrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/microsoft.graph.windowsUpdates.enrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/microsoft.graph.windowsUpdates.unenrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/microsoft.graph.windowsUpdates.unenrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Exclusions Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/microsoft.graph.windowsUpdates.enrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/microsoft.graph.windowsUpdates.enrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/microsoft.graph.windowsUpdates.unenrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/microsoft.graph.windowsUpdates.unenrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Members Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/microsoft.graph.windowsUpdates.updateAudience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Add Exclusions",
			"name": "addExclusions",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "addExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Add Members",
			"name": "addMembers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "addMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Remove Exclusions",
			"name": "removeExclusions",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "removeExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Remove Members",
			"name": "removeMembers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "removeMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deploymentAudiences/{deploymentAudience-id}/microsoft.graph.windowsUpdates.updateAudienceById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Add Exclusions",
			"name": "addExclusions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "addExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Add Members",
			"name": "addMembers",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "addMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Remove Exclusions",
			"name": "removeExclusions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "removeExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Remove Members",
			"name": "removeMembers",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "removeMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployment Audiences Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/microsoft.graph.windowsUpdates.enrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/microsoft.graph.windowsUpdates.enrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/microsoft.graph.windowsUpdates.unenrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/microsoft.graph.windowsUpdates.unenrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/exclusions/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Exclusions Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/microsoft.graph.windowsUpdates.enrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/microsoft.graph.windowsUpdates.enrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/microsoft.graph.windowsUpdates.unenrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/microsoft.graph.windowsUpdates.unenrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/members/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Members Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/microsoft.graph.windowsUpdates.updateAudience",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Add Exclusions",
			"name": "addExclusions",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "addExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Add Members",
			"name": "addMembers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "addMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Remove Exclusions",
			"name": "removeExclusions",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "removeExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "Remove Members",
			"name": "removeMembers",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "removeMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/deployments/{deployment-id}/audience/microsoft.graph.windowsUpdates.updateAudienceById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Add Exclusions",
			"name": "addExclusions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "addExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Add Members",
			"name": "addMembers",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "addMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Remove Exclusions",
			"name": "removeExclusions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "removeExclusions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "Remove Members",
			"name": "removeMembers",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "removeMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Deployments Deployment Audience Update Audience By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.enrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.enrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Enroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.unenrollAssets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/microsoft.graph.windowsUpdates.unenrollAssetsById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "Update Category",
			"name": "updateCategory",
			"type": "options",
			"default": "feature",
			"options": [
				{
					"name": "Feature",
					"value": "feature"
				},
				{
					"name": "Quality",
					"value": "quality"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				},
				{
					"name": "Driver",
					"value": "driver"
				}
			],
			"routing": {
				"send": {
					"property": "updateCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Unenroll Assets By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Add Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/{updatableAsset-id}/microsoft.graph.windowsUpdates.addMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Add Members By Id"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "Assets",
			"name": "assets",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "assets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Remove Members"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/windows/updates/updatableAssets/{updatableAsset-id}/microsoft.graph.windowsUpdates.removeMembersById",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Remove Members By Id"
					]
				}
			}
		},
		{
			"displayName": "Member Entity Type",
			"name": "memberEntityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "memberEntityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Actions"
					],
					"operation": [
						"Admin Windows Updates Updatable Assets Updatable Asset Remove Members By Id"
					]
				}
			}
		},
];
