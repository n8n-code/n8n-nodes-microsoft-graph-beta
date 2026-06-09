import type { INodeProperties } from 'n8n-workflow';

export const meChatDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					]
				}
			},
			"options": [
				{
					"name": "Me List Chats",
					"value": "Me List Chats",
					"action": "List chats",
					"description": "Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats"
						}
					}
				},
				{
					"name": "Me Create Chats",
					"value": "Me Create Chats",
					"action": "Create new navigation property to chats for me",
					"description": "Create new navigation property to chats for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats"
						}
					}
				},
				{
					"name": "Me Delete Chats",
					"value": "Me Delete Chats",
					"action": "Delete navigation property chats for me",
					"description": "Delete navigation property chats for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Chats",
					"value": "Me Get Chats",
					"action": "Get chats from me",
					"description": "Get chats from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Chats",
					"value": "Me Update Chats",
					"action": "Update the navigation property chats in me",
					"description": "Update the navigation property chats in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats List Installed Apps",
					"value": "Me Chats List Installed Apps",
					"action": "List apps in chat",
					"description": "List all app installations within a chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Me Chats Create Installed Apps",
					"value": "Me Chats Create Installed Apps",
					"action": "Add app to chat",
					"description": "Install a teamsApp to the specified chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Me Chats Delete Installed Apps",
					"value": "Me Chats Delete Installed Apps",
					"action": "Delete navigation property installedApps for me",
					"description": "Delete navigation property installedApps for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Installed Apps",
					"value": "Me Chats Get Installed Apps",
					"action": "Get installedApps from me",
					"description": "A collection of all the apps in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Installed Apps",
					"value": "Me Chats Update Installed Apps",
					"action": "Update the navigation property installedApps in me",
					"description": "Update the navigation property installedApps in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Installed Apps Get Teams App",
					"value": "Me Chats Installed Apps Get Teams App",
					"action": "Get teamsApp from me",
					"description": "The app that is installed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Me Chats Installed Apps Get Teams App Definition",
					"value": "Me Chats Installed Apps Get Teams App Definition",
					"action": "Get teamsAppDefinition from me",
					"description": "The details of this version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsAppDefinition"
						}
					}
				},
				{
					"name": "Me Chats Delete Last Message Preview",
					"value": "Me Chats Delete Last Message Preview",
					"action": "Delete navigation property lastMessagePreview for me",
					"description": "Delete navigation property lastMessagePreview for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Me Chats Get Last Message Preview",
					"value": "Me Chats Get Last Message Preview",
					"action": "Get lastMessagePreview from me",
					"description": "Preview of the last message sent in the chat. Null if no messages have been sent in the chat. Currently, only the list chats operation supports this property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Me Chats Update Last Message Preview",
					"value": "Me Chats Update Last Message Preview",
					"action": "Update the navigation property lastMessagePreview in me",
					"description": "Update the navigation property lastMessagePreview in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Me Chats List Members",
					"value": "Me Chats List Members",
					"action": "List members of a chat",
					"description": "List all conversation members in a chat. This method supports federation. For one-on-one chats, at least one chat member must belong to the tenant the request initiates from. For group chats, the chat must be initiated by a user in the tenant the request initiates from.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/members"
						}
					}
				},
				{
					"name": "Me Chats Create Members",
					"value": "Me Chats Create Members",
					"action": "Add member to a chat",
					"description": "Add a conversationMember to a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/members"
						}
					}
				},
				{
					"name": "Me Chats Delete Members",
					"value": "Me Chats Delete Members",
					"action": "Delete navigation property members for me",
					"description": "Delete navigation property members for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Members",
					"value": "Me Chats Get Members",
					"action": "Get members from me",
					"description": "A collection of all the members in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Members",
					"value": "Me Chats Update Members",
					"action": "Update the navigation property members in me",
					"description": "Update the navigation property members in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats List Messages",
					"value": "Me Chats List Messages",
					"action": "List messages in a chat",
					"description": "Retrieve the list of messages in a chat. This method supports federation. To list chat messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Me Chats Create Messages",
					"value": "Me Chats Create Messages",
					"action": "Send message in a chat",
					"description": "Send a new chatMessage in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before creating a chat message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Me Chats Delete Messages",
					"value": "Me Chats Delete Messages",
					"action": "Delete navigation property messages for me",
					"description": "Delete navigation property messages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Messages",
					"value": "Me Chats Get Messages",
					"action": "Get messages from me",
					"description": "A collection of all the messages in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Messages",
					"value": "Me Chats Update Messages",
					"action": "Update the navigation property messages in me",
					"description": "Update the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages List Hosted Contents",
					"value": "Me Chats Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Me Chats Messages Create Hosted Contents",
					"value": "Me Chats Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for me",
					"description": "Create new navigation property to hostedContents for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Me Chats Messages Delete Hosted Contents",
					"value": "Me Chats Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for me",
					"description": "Delete navigation property hostedContents for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Get Hosted Contents",
					"value": "Me Chats Messages Get Hosted Contents",
					"action": "Get hostedContents from me",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Update Hosted Contents",
					"value": "Me Chats Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in me",
					"description": "Update the navigation property hostedContents in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages List Replies",
					"value": "Me Chats Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Me Chats Messages Create Replies",
					"value": "Me Chats Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Me Chats Messages Delete Replies",
					"value": "Me Chats Messages Delete Replies",
					"action": "Delete navigation property replies for me",
					"description": "Delete navigation property replies for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Get Replies",
					"value": "Me Chats Messages Get Replies",
					"action": "Get replies from me",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Update Replies",
					"value": "Me Chats Messages Update Replies",
					"action": "Update the navigation property replies in me",
					"description": "Update the navigation property replies in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Replies List Hosted Contents",
					"value": "Me Chats Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Me Chats Messages Replies Create Hosted Contents",
					"value": "Me Chats Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for me",
					"description": "Create new navigation property to hostedContents for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Me Chats Messages Replies Delete Hosted Contents",
					"value": "Me Chats Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for me",
					"description": "Delete navigation property hostedContents for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Replies Get Hosted Contents",
					"value": "Me Chats Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from me",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Messages Replies Update Hosted Contents",
					"value": "Me Chats Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in me",
					"description": "Update the navigation property hostedContents in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats List Operations",
					"value": "Me Chats List Operations",
					"action": "List operations on a chat",
					"description": "List all Teams async operations that ran or are running on the specified chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Me Chats Create Operations",
					"value": "Me Chats Create Operations",
					"action": "Create new navigation property to operations for me",
					"description": "Create new navigation property to operations for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Me Chats Delete Operations",
					"value": "Me Chats Delete Operations",
					"action": "Delete navigation property operations for me",
					"description": "Delete navigation property operations for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Operations",
					"value": "Me Chats Get Operations",
					"action": "Get operations from me",
					"description": "A collection of all the Teams async operations that ran or are running on the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Operations",
					"value": "Me Chats Update Operations",
					"action": "Update the navigation property operations in me",
					"description": "Update the navigation property operations in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats List Permission Grants",
					"value": "Me Chats List Permission Grants",
					"action": "List permissionGrants of a chat",
					"description": "List all resource-specific permission grants on the chat. This list specifies the Azure AD apps that have access to the **chat**, along with the corresponding kind of resource-specific access that each app has.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Me Chats Create Permission Grants",
					"value": "Me Chats Create Permission Grants",
					"action": "Create new navigation property to permissionGrants for me",
					"description": "Create new navigation property to permissionGrants for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/permissionGrants"
						}
					}
				},
				{
					"name": "Me Chats Delete Permission Grants",
					"value": "Me Chats Delete Permission Grants",
					"action": "Delete navigation property permissionGrants for me",
					"description": "Delete navigation property permissionGrants for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Permission Grants",
					"value": "Me Chats Get Permission Grants",
					"action": "Get permissionGrants from me",
					"description": "A collection of permissions granted to apps for the chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Permission Grants",
					"value": "Me Chats Update Permission Grants",
					"action": "Update the navigation property permissionGrants in me",
					"description": "Update the navigation property permissionGrants in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats List Pinned Messages",
					"value": "Me Chats List Pinned Messages",
					"action": "List pinnedChatMessages in a chat",
					"description": "Get a list of pinnedChatMessages in a chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages"
						}
					}
				},
				{
					"name": "Me Chats Create Pinned Messages",
					"value": "Me Chats Create Pinned Messages",
					"action": "Pin a message in a chat",
					"description": "Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages"
						}
					}
				},
				{
					"name": "Me Chats Delete Pinned Messages",
					"value": "Me Chats Delete Pinned Messages",
					"action": "Delete navigation property pinnedMessages for me",
					"description": "Delete navigation property pinnedMessages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Pinned Messages",
					"value": "Me Chats Get Pinned Messages",
					"action": "Get pinnedMessages from me",
					"description": "A collection of all the pinned messages in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Pinned Messages",
					"value": "Me Chats Update Pinned Messages",
					"action": "Update the navigation property pinnedMessages in me",
					"description": "Update the navigation property pinnedMessages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Pinned Messages Get Message",
					"value": "Me Chats Pinned Messages Get Message",
					"action": "Get message from me",
					"description": "Represents details about the chat message that is pinned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}/message"
						}
					}
				},
				{
					"name": "Me Chats List Tabs",
					"value": "Me Chats List Tabs",
					"action": "List tabs in chat",
					"description": "Retrieve the list of tabs in the specified chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Me Chats Create Tabs",
					"value": "Me Chats Create Tabs",
					"action": "Add tab to chat",
					"description": "Add (pin) a tab to the specified chat. \nThe corresponding app must already be installed in the chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Me Chats Delete Tabs",
					"value": "Me Chats Delete Tabs",
					"action": "Delete navigation property tabs for me",
					"description": "Delete navigation property tabs for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Get Tabs",
					"value": "Me Chats Get Tabs",
					"action": "Get tabs from me",
					"description": "A collection of all the tabs in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Update Tabs",
					"value": "Me Chats Update Tabs",
					"action": "Update the navigation property tabs in me",
					"description": "Update the navigation property tabs in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Me Chats Tabs Get Teams App",
					"value": "Me Chats Tabs Get Teams App",
					"action": "Get teamsApp from me",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/chats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me List Chats"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Create Chats"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Create Chats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Delete Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me Delete Chats"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Get Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me Get Chats"
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
						"Me Chat"
					],
					"operation": [
						"Me Get Chats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Update Chats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Update Chats"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Installed Apps"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Installed Apps Get Teams App"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Installed Apps Get Teams App"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Installed Apps Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Installed Apps Get Teams App Definition"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Installed Apps Get Teams App Definition"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Installed Apps Get Teams App Definition"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Last Message Preview"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Last Message Preview"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Last Message Preview"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/lastMessagePreview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Members"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Delete Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Get Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Get Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Delete Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Get Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Get Replies"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Delete Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Get Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Get Hosted Contents"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Operations"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Permission Grants"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/pinnedMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/pinnedMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/pinnedMessages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Pinned Messages"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Pinned Messages Get Message"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Pinned Messages Get Message"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Pinned Messages Get Message"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /me/chats/{chat-id}/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/chats/{chat-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Tabs"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/chats/{chat-id}/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Chat"
					],
					"operation": [
						"Me Chats Tabs Get Teams App"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Tabs Get Teams App"
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
						"Me Chat"
					],
					"operation": [
						"Me Chats Tabs Get Teams App"
					]
				}
			}
		},
];
