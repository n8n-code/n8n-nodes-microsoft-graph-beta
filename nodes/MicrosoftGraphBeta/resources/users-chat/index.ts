import type { INodeProperties } from 'n8n-workflow';

export const usersChatDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					]
				}
			},
			"options": [
				{
					"name": "Users List Chats",
					"value": "Users List Chats",
					"action": "List chats",
					"description": "Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats"
						}
					}
				},
				{
					"name": "Users Create Chats",
					"value": "Users Create Chats",
					"action": "Create new navigation property to chats for users",
					"description": "Create new navigation property to chats for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats"
						}
					}
				},
				{
					"name": "Users Delete Chats",
					"value": "Users Delete Chats",
					"action": "Delete navigation property chats for users",
					"description": "Delete navigation property chats for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Chats",
					"value": "Users Get Chats",
					"action": "Get chats from users",
					"description": "Get chats from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Chats",
					"value": "Users Update Chats",
					"action": "Update the navigation property chats in users",
					"description": "Update the navigation property chats in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats List Installed Apps",
					"value": "Users Chats List Installed Apps",
					"action": "List apps in chat",
					"description": "List all app installations within a chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Users Chats Create Installed Apps",
					"value": "Users Chats Create Installed Apps",
					"action": "Add app to chat",
					"description": "Install a teamsApp to the specified chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Users Chats Delete Installed Apps",
					"value": "Users Chats Delete Installed Apps",
					"action": "Delete navigation property installedApps for users",
					"description": "Delete navigation property installedApps for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Installed Apps",
					"value": "Users Chats Get Installed Apps",
					"action": "Get installedApps from users",
					"description": "A collection of all the apps in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Installed Apps",
					"value": "Users Chats Update Installed Apps",
					"action": "Update the navigation property installedApps in users",
					"description": "Update the navigation property installedApps in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Installed Apps Get Teams App",
					"value": "Users Chats Installed Apps Get Teams App",
					"action": "Get teamsApp from users",
					"description": "The app that is installed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Users Chats Installed Apps Get Teams App Definition",
					"value": "Users Chats Installed Apps Get Teams App Definition",
					"action": "Get teamsAppDefinition from users",
					"description": "The details of this version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsAppDefinition"
						}
					}
				},
				{
					"name": "Users Chats Delete Last Message Preview",
					"value": "Users Chats Delete Last Message Preview",
					"action": "Delete navigation property lastMessagePreview for users",
					"description": "Delete navigation property lastMessagePreview for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Users Chats Get Last Message Preview",
					"value": "Users Chats Get Last Message Preview",
					"action": "Get lastMessagePreview from users",
					"description": "Preview of the last message sent in the chat. Null if no messages have been sent in the chat. Currently, only the list chats operation supports this property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Users Chats Update Last Message Preview",
					"value": "Users Chats Update Last Message Preview",
					"action": "Update the navigation property lastMessagePreview in users",
					"description": "Update the navigation property lastMessagePreview in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Users Chats List Members",
					"value": "Users Chats List Members",
					"action": "List members of a chat",
					"description": "List all conversation members in a chat. This method supports federation. For one-on-one chats, at least one chat member must belong to the tenant the request initiates from. For group chats, the chat must be initiated by a user in the tenant the request initiates from.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/members"
						}
					}
				},
				{
					"name": "Users Chats Create Members",
					"value": "Users Chats Create Members",
					"action": "Add member to a chat",
					"description": "Add a conversationMember to a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/members"
						}
					}
				},
				{
					"name": "Users Chats Delete Members",
					"value": "Users Chats Delete Members",
					"action": "Delete navigation property members for users",
					"description": "Delete navigation property members for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Members",
					"value": "Users Chats Get Members",
					"action": "Get members from users",
					"description": "A collection of all the members in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Members",
					"value": "Users Chats Update Members",
					"action": "Update the navigation property members in users",
					"description": "Update the navigation property members in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats List Messages",
					"value": "Users Chats List Messages",
					"action": "List messages in a chat",
					"description": "Retrieve the list of messages in a chat. This method supports federation. To list chat messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Users Chats Create Messages",
					"value": "Users Chats Create Messages",
					"action": "Send message in a chat",
					"description": "Send a new chatMessage in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before creating a chat message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Users Chats Delete Messages",
					"value": "Users Chats Delete Messages",
					"action": "Delete navigation property messages for users",
					"description": "Delete navigation property messages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Messages",
					"value": "Users Chats Get Messages",
					"action": "Get messages from users",
					"description": "A collection of all the messages in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Messages",
					"value": "Users Chats Update Messages",
					"action": "Update the navigation property messages in users",
					"description": "Update the navigation property messages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages List Hosted Contents",
					"value": "Users Chats Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Users Chats Messages Create Hosted Contents",
					"value": "Users Chats Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for users",
					"description": "Create new navigation property to hostedContents for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Users Chats Messages Delete Hosted Contents",
					"value": "Users Chats Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for users",
					"description": "Delete navigation property hostedContents for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Get Hosted Contents",
					"value": "Users Chats Messages Get Hosted Contents",
					"action": "Get hostedContents from users",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Update Hosted Contents",
					"value": "Users Chats Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in users",
					"description": "Update the navigation property hostedContents in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages List Replies",
					"value": "Users Chats Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Users Chats Messages Create Replies",
					"value": "Users Chats Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Users Chats Messages Delete Replies",
					"value": "Users Chats Messages Delete Replies",
					"action": "Delete navigation property replies for users",
					"description": "Delete navigation property replies for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Get Replies",
					"value": "Users Chats Messages Get Replies",
					"action": "Get replies from users",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Update Replies",
					"value": "Users Chats Messages Update Replies",
					"action": "Update the navigation property replies in users",
					"description": "Update the navigation property replies in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Replies List Hosted Contents",
					"value": "Users Chats Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Users Chats Messages Replies Create Hosted Contents",
					"value": "Users Chats Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for users",
					"description": "Create new navigation property to hostedContents for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Users Chats Messages Replies Delete Hosted Contents",
					"value": "Users Chats Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for users",
					"description": "Delete navigation property hostedContents for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Replies Get Hosted Contents",
					"value": "Users Chats Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from users",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Messages Replies Update Hosted Contents",
					"value": "Users Chats Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in users",
					"description": "Update the navigation property hostedContents in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats List Operations",
					"value": "Users Chats List Operations",
					"action": "List operations on a chat",
					"description": "List all Teams async operations that ran or are running on the specified chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Users Chats Create Operations",
					"value": "Users Chats Create Operations",
					"action": "Create new navigation property to operations for users",
					"description": "Create new navigation property to operations for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Users Chats Delete Operations",
					"value": "Users Chats Delete Operations",
					"action": "Delete navigation property operations for users",
					"description": "Delete navigation property operations for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Operations",
					"value": "Users Chats Get Operations",
					"action": "Get operations from users",
					"description": "A collection of all the Teams async operations that ran or are running on the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Operations",
					"value": "Users Chats Update Operations",
					"action": "Update the navigation property operations in users",
					"description": "Update the navigation property operations in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats List Permission Grants",
					"value": "Users Chats List Permission Grants",
					"action": "List permissionGrants of a chat",
					"description": "List all resource-specific permission grants on the chat. This list specifies the Azure AD apps that have access to the **chat**, along with the corresponding kind of resource-specific access that each app has.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Users Chats Create Permission Grants",
					"value": "Users Chats Create Permission Grants",
					"action": "Create new navigation property to permissionGrants for users",
					"description": "Create new navigation property to permissionGrants for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Users Chats Delete Permission Grants",
					"value": "Users Chats Delete Permission Grants",
					"action": "Delete navigation property permissionGrants for users",
					"description": "Delete navigation property permissionGrants for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Permission Grants",
					"value": "Users Chats Get Permission Grants",
					"action": "Get permissionGrants from users",
					"description": "A collection of permissions granted to apps for the chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Permission Grants",
					"value": "Users Chats Update Permission Grants",
					"action": "Update the navigation property permissionGrants in users",
					"description": "Update the navigation property permissionGrants in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats List Pinned Messages",
					"value": "Users Chats List Pinned Messages",
					"action": "List pinnedChatMessages in a chat",
					"description": "Get a list of pinnedChatMessages in a chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages"
						}
					}
				},
				{
					"name": "Users Chats Create Pinned Messages",
					"value": "Users Chats Create Pinned Messages",
					"action": "Pin a message in a chat",
					"description": "Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages"
						}
					}
				},
				{
					"name": "Users Chats Delete Pinned Messages",
					"value": "Users Chats Delete Pinned Messages",
					"action": "Delete navigation property pinnedMessages for users",
					"description": "Delete navigation property pinnedMessages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Pinned Messages",
					"value": "Users Chats Get Pinned Messages",
					"action": "Get pinnedMessages from users",
					"description": "A collection of all the pinned messages in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Pinned Messages",
					"value": "Users Chats Update Pinned Messages",
					"action": "Update the navigation property pinnedMessages in users",
					"description": "Update the navigation property pinnedMessages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Pinned Messages Get Message",
					"value": "Users Chats Pinned Messages Get Message",
					"action": "Get message from users",
					"description": "Represents details about the chat message that is pinned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}/message"
						}
					}
				},
				{
					"name": "Users Chats List Tabs",
					"value": "Users Chats List Tabs",
					"action": "List tabs in chat",
					"description": "Retrieve the list of tabs in the specified chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Users Chats Create Tabs",
					"value": "Users Chats Create Tabs",
					"action": "Add tab to chat",
					"description": "Add (pin) a tab to the specified chat. \nThe corresponding app must already be installed in the chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Users Chats Delete Tabs",
					"value": "Users Chats Delete Tabs",
					"action": "Delete navigation property tabs for users",
					"description": "Delete navigation property tabs for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Get Tabs",
					"value": "Users Chats Get Tabs",
					"action": "Get tabs from users",
					"description": "A collection of all the tabs in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Update Tabs",
					"value": "Users Chats Update Tabs",
					"action": "Update the navigation property tabs in users",
					"description": "Update the navigation property tabs in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Users Chats Tabs Get Teams App",
					"value": "Users Chats Tabs Get Teams App",
					"action": "Get teamsApp from users",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/chats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users List Chats"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Create Chats"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Create Chats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Delete Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users Delete Chats"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Get Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users Get Chats"
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
						"Users Chat"
					],
					"operation": [
						"Users Get Chats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Update Chats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Update Chats"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Installed Apps"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Installed Apps Get Teams App"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Installed Apps Get Teams App"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Installed Apps Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Installed Apps Get Teams App Definition"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Installed Apps Get Teams App Definition"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Installed Apps Get Teams App Definition"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Last Message Preview"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Last Message Preview"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Last Message Preview"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Members"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Delete Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Get Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Get Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Delete Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Get Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Get Replies"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Delete Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Get Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Get Hosted Contents"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Operations"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Permission Grants"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/pinnedMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/pinnedMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/pinnedMessages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Pinned Messages"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Pinned Messages Get Message"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Pinned Messages Get Message"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Pinned Messages Get Message"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/chats/{chat-id}/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Tabs"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Chat"
					],
					"operation": [
						"Users Chats Tabs Get Teams App"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Tabs Get Teams App"
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
						"Users Chat"
					],
					"operation": [
						"Users Chats Tabs Get Teams App"
					]
				}
			}
		},
];
