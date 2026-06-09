import type { INodeProperties } from 'n8n-workflow';

export const teamTemplateDefinitionActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					]
				}
			},
			"options": [
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Members Add",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Set Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Undo Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Unset Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Set Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Complete Migration",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Complete Migration",
					"action": "Invoke action completeMigration",
					"description": "Complete the message migration process by removing `migration mode` from a channel in a team. `Migration mode` is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a **completeMigration** request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.completeMigration"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Provision Email",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Provision Email",
					"action": "Invoke action provisionEmail",
					"description": "Provision an email address for a channel. Microsoft Teams doesn't automatically provision an email address for a **channel** by default. To have Teams provision an email address, you can call **provisionEmail**, or through the Teams user interface, select **Get email address**, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a **channel**, use the removeEmail method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.provisionEmail"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Channels Channel Remove Email",
					"value": "Team Template Definition Team Template Definition Team Definition Channels Channel Remove Email",
					"action": "Invoke action removeEmail",
					"description": "Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/microsoft.graph.removeEmail"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Installed Apps Teams App Installation Upgrade",
					"value": "Team Template Definition Team Template Definition Team Definition Installed Apps Teams App Installation Upgrade",
					"action": "Invoke action upgrade",
					"description": "Upgrade an app installation within a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/microsoft.graph.upgrade"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Members Add",
					"value": "Team Template Definition Team Template Definition Team Definition Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Archive",
					"value": "Team Template Definition Team Template Definition Team Definition Archive",
					"action": "Invoke action archive",
					"description": "Archive the specified team. \nWhen a team is archived, users can no longer send or like messages on any channel in the team, edit the team's name, description, or other settings, or in general make most changes to the team.\nMembership changes to the team continue to be allowed. Archiving is an async operation. A team is archived once the async operation completes successfully, which may occur subsequent to a response from this API. To archive a team, the team and group must have an owner. To restore a team from its archived state, use the API to unarchive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/microsoft.graph.archive"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Clone",
					"value": "Team Template Definition Team Template Definition Team Definition Clone",
					"action": "Invoke action clone",
					"description": "Create a copy of a team. This operation also creates a copy of the corresponding group.\nYou can specify which parts of the team to clone: When tabs are cloned, they are put into an unconfigured state \n-- they are displayed on the tab bar in Microsoft Teams, and the first time you open them, you'll go through the configuration screen. \n(If the person opening the tab does not have permission to configure apps, they will see a message explaining that the tab hasn't been configured.) Cloning is a long-running operation.\nAfter the POST clone returns, you need to GET the operation \nreturned by the Location: header to see if it's 'running' or 'succeeded' or 'failed'. \nYou should continue to GET until the status is not 'running'. \nThe recommended delay between GETs is 5 seconds.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/microsoft.graph.clone"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Complete Migration",
					"value": "Team Template Definition Team Template Definition Team Definition Complete Migration",
					"action": "Invoke action completeMigration",
					"description": "Complete the message migration process by removing `migration mode` from a team. `Migration mode` is a special state where certain operations are barred, like message POST and membership operations during the data migration process. After a **completeMigration** request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/microsoft.graph.completeMigration"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Send Activity Notification",
					"value": "Team Template Definition Team Template Definition Team Definition Send Activity Notification",
					"action": "Invoke action sendActivityNotification",
					"description": "Send an activity feed notification in the scope of a team. For more details about sending notifications and the requirements for doing so, see\nsending Teams activity notifications.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/microsoft.graph.sendActivityNotification"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Unarchive",
					"value": "Team Template Definition Team Template Definition Team Definition Unarchive",
					"action": "Invoke action unarchive",
					"description": "Restore an archived team. This restores users' ability to send messages and edit the team, abiding by tenant and team settings. Teams are archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which may occur subsequent to a response from this API.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/microsoft.graph.unarchive"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Get By Ids",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Get By Ids",
					"action": "Invoke action getByIds",
					"description": "Return the directory objects specified in a list of IDs. Some common uses for this function are to:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/microsoft.graph.getByIds"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Get User Owned Objects",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Get User Owned Objects",
					"action": "Invoke action getUserOwnedObjects",
					"description": "Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/microsoft.graph.getUserOwnedObjects"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties",
					"action": "Invoke action validateProperties",
					"description": "Validate that a Microsoft 365 group's display name or mail nickname complies with naming policies.  Clients can use this API to determine whether a display name or mail nickname is valid before trying to **create** a Microsoft 365 group. For validating properties of an existing group, use the validateProperties function for groups. The following validations are performed for the display name and mail nickname properties: \n1. Validate the prefix and suffix naming policy\n2. Validate the custom banned words policy\n3. Validate the mail nickname is unique This API returns with the first failure encountered. If one or more properties fail multiple validations, only the property with the first validation failure is returned. However, you can validate both the mail nickname and the display name and receive a collection of validation errors if you are only validating the prefix and suffix naming policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/microsoft.graph.validateProperties"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Groups",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Groups",
					"action": "Invoke action checkMemberGroups",
					"description": "Check for membership in a specified list of group IDs, and return from that list those groups (identified by IDs) of which the specified user, group, service principal, organizational contact, device, or directory object is a member. This function is transitive. You can check up to a maximum of 20 groups per request. This function supports all groups provisioned in Azure AD. Because Microsoft 365 groups cannot contain other groups, membership in a Microsoft 365 group is always direct.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberGroups"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Objects",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Objects",
					"action": "Invoke action checkMemberObjects",
					"description": "Invoke action checkMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.checkMemberObjects"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Groups",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Groups",
					"action": "Invoke action getMemberGroups",
					"description": "Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberGroups"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Objects",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Objects",
					"action": "Invoke action getMemberObjects",
					"description": "Invoke action getMemberObjects",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.getMemberObjects"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Restore",
					"value": "Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Restore",
					"action": "Invoke action restore",
					"description": "Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items. If an item was accidentally deleted, you can fully restore the item. This is not applicable to security groups, which are deleted permanently. A recently deleted item will remain available for up to 30 days. After 30 days, the item is permanently deleted.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Members Add",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Members Add",
					"action": "Invoke action add",
					"description": "Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/members/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Set Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Undo Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Unset Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Set Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Set Reaction",
					"action": "Invoke action setReaction",
					"description": "Invoke action setReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.setReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Soft Delete",
					"action": "Invoke action softDelete",
					"description": "Delete a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.softDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Undo Soft Delete",
					"action": "Invoke action undoSoftDelete",
					"description": "Undo soft deletion of a single message or a message reply in a channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.undoSoftDelete"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Unset Reaction",
					"action": "Invoke action unsetReaction",
					"description": "Invoke action unsetReaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/microsoft.graph.unsetReaction"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Complete Migration",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Complete Migration",
					"action": "Invoke action completeMigration",
					"description": "Complete the message migration process by removing `migration mode` from a channel in a team. `Migration mode` is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a **completeMigration** request is made, you cannot import additional messages into the team. You can add members to the team after the request returns a successful response.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/microsoft.graph.completeMigration"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Provision Email",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Provision Email",
					"action": "Invoke action provisionEmail",
					"description": "Provision an email address for a channel. Microsoft Teams doesn't automatically provision an email address for a **channel** by default. To have Teams provision an email address, you can call **provisionEmail**, or through the Teams user interface, select **Get email address**, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a **channel**, use the removeEmail method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/microsoft.graph.provisionEmail"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Primary Channel Remove Email",
					"value": "Team Template Definition Team Template Definition Team Definition Primary Channel Remove Email",
					"action": "Invoke action removeEmail",
					"description": "Remove the email address of a channel. You can remove an email address only if it was provisioned using the provisionEmail method or through the Microsoft Teams client.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/microsoft.graph.removeEmail"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Schedule Share",
					"value": "Team Template Definition Team Template Definition Team Definition Schedule Share",
					"action": "Invoke action share",
					"description": "Share a schedule time range with schedule members.\nMake the collections of shift, openshift and timeOff items in the specified time range of the schedule viewable by the specified team members, including employees and managers.\nEach shift, openshift and timeOff instance in a schedule supports a draft version and a shared version of the item. The draft version is viewable by only managers, and the shared version is viewable by employees and managers. For each shift, openshift and timeOff instance in the specified time range, the share action updates the shared version from the draft version, so that in addition to managers, employees can also view the most current information about the item. The **notifyTeam** parameter further specifies which employees can view the item.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/microsoft.graph.share"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Clock In",
					"value": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Clock In",
					"action": "Invoke action clockIn",
					"description": "Clock in to start a timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/microsoft.graph.clockIn"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Clock Out",
					"value": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Clock Out",
					"action": "Invoke action clockOut",
					"description": "Clock out to end an open timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.clockOut"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Confirm",
					"value": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Confirm",
					"action": "Invoke action confirm",
					"description": "Confirm a specific timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.confirm"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card End Break",
					"value": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card End Break",
					"action": "Invoke action endBreak",
					"description": "End the open break in a specific timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.endBreak"
						}
					}
				},
				{
					"name": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Start Break",
					"value": "Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Start Break",
					"action": "Invoke action startBreak",
					"description": "Start a break in a specific timeCard.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}/microsoft.graph.startBreak"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/microsoft.graph.completeMigration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Complete Migration"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/microsoft.graph.provisionEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Provision Email"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/microsoft.graph.removeEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Channels Channel Remove Email"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/microsoft.graph.upgrade",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Installed Apps Teams App Installation Upgrade"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/microsoft.graph.archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Archive"
					]
				}
			}
		},
		{
			"displayName": "Should Set Spo Site Read Only For Members",
			"name": "shouldSetSpoSiteReadOnlyForMembers",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "shouldSetSpoSiteReadOnlyForMembers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/microsoft.graph.clone",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "Classification",
			"name": "classification",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "classification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "Parts To Clone",
			"name": "partsToClone",
			"type": "options",
			"default": "apps",
			"options": [
				{
					"name": "Apps",
					"value": "apps"
				},
				{
					"name": "Tabs",
					"value": "tabs"
				},
				{
					"name": "Settings",
					"value": "settings"
				},
				{
					"name": "Channels",
					"value": "channels"
				},
				{
					"name": "Members",
					"value": "members"
				}
			],
			"routing": {
				"send": {
					"property": "partsToClone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "Visibility",
			"name": "visibility",
			"type": "options",
			"default": "private",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Public",
					"value": "public"
				},
				{
					"name": "Hidden Membership",
					"value": "hiddenMembership"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Clone"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/microsoft.graph.completeMigration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Complete Migration"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/microsoft.graph.sendActivityNotification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "activityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Preview Text",
			"name": "previewText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "previewText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Recipient",
			"name": "recipient",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "recipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Template Parameters",
			"name": "templateParameters",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "templateParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "Topic",
			"name": "topic",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "topic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Send Activity Notification"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/microsoft.graph.unarchive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Unarchive"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/microsoft.graph.getByIds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Get By Ids"
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
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "Types",
			"name": "types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Get By Ids"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/microsoft.graph.getUserOwnedObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "userId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Get User Owned Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/microsoft.graph.validateProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Entity Type",
			"name": "entityType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "entityType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "Mail Nickname",
			"name": "mailNickname",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mailNickname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Validate Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "groupIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.checkMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Objects"
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
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Check Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.getMemberObjects",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "Security Enabled Only",
			"name": "securityEnabledOnly",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "securityEnabledOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Get Member Objects"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Permission Grants Resource Specific Permission Grant Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Members Add"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.setReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Set Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.softDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.undoSoftDelete",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Undo Soft Delete"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/microsoft.graph.unsetReaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction Type",
			"name": "reactionType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reactionType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Messages Chat Message Replies Chat Message Unset Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/microsoft.graph.completeMigration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Complete Migration"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/microsoft.graph.provisionEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Provision Email"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/microsoft.graph.removeEmail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Primary Channel Remove Email"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/microsoft.graph.share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Share"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "endDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Share"
					]
				}
			}
		},
		{
			"displayName": "Notify Team",
			"name": "notifyTeam",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "notifyTeam",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Share"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "startDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Share"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/microsoft.graph.clockIn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "On Behalf Of User Id",
			"name": "onBehalfOfUserId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "onBehalfOfUserId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Clock In"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/microsoft.graph.clockOut",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Clock Out"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Clock Out"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Clock Out"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/microsoft.graph.confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Confirm"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/microsoft.graph.endBreak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card End Break"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card End Break"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card End Break"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}/microsoft.graph.startBreak",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Start Break"
					]
				}
			}
		},
		{
			"displayName": "At Approved Location",
			"name": "atApprovedLocation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "atApprovedLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Start Break"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Actions"
					],
					"operation": [
						"Team Template Definition Team Template Definition Team Definition Schedule Time Cards Time Card Start Break"
					]
				}
			}
		},
];
