import type { INodeProperties } from 'n8n-workflow';

export const teamTemplateDefinitionTeamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					]
				}
			},
			"options": [
				{
					"name": "Team Template Definition Delete Team Definition",
					"value": "Team Template Definition Delete Team Definition",
					"action": "Delete navigation property teamDefinition for teamTemplateDefinition",
					"description": "Delete navigation property teamDefinition for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition"
						}
					}
				},
				{
					"name": "Team Template Definition Get Team Definition",
					"value": "Team Template Definition Get Team Definition",
					"action": "Get teamDefinition",
					"description": "Get the properties of the team associated with a teamTemplateDefinition object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition"
						}
					}
				},
				{
					"name": "Team Template Definition Update Team Definition",
					"value": "Team Template Definition Update Team Definition",
					"action": "Update the navigation property teamDefinition in teamTemplateDefinition",
					"description": "Update the navigation property teamDefinition in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List All Channels",
					"value": "Team Template Definition Team Definition List All Channels",
					"action": "List allChannels",
					"description": "Get the list of channels either in this team or shared with this team (incoming channels).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/allChannels"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get All Channels",
					"value": "Team Template Definition Team Definition Get All Channels",
					"action": "Get allChannels from teamTemplateDefinition",
					"description": "List of channels either hosted in or shared with the team (incoming channels).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/allChannels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Channels",
					"value": "Team Template Definition Team Definition List Channels",
					"action": "List channels",
					"description": "Retrieve the list of channels in this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Create Channels",
					"value": "Team Template Definition Team Definition Create Channels",
					"action": "Create channel",
					"description": "Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel's `displayName` is 50 characters. This is the name that appears to the user in Microsoft Teams. You can add a maximum of 200 members when you create a private channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Channels",
					"value": "Team Template Definition Team Definition Delete Channels",
					"action": "Delete navigation property channels for teamTemplateDefinition",
					"description": "Delete navigation property channels for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Channels",
					"value": "Team Template Definition Team Definition Get Channels",
					"action": "Get channels from teamTemplateDefinition",
					"description": "The collection of channels and messages associated with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Channels",
					"value": "Team Template Definition Team Definition Update Channels",
					"action": "Update the navigation property channels in teamTemplateDefinition",
					"description": "Update the navigation property channels in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Get Files Folder",
					"value": "Team Template Definition Team Definition Channels Get Files Folder",
					"action": "Get filesFolder",
					"description": "Get the metadata for the location where the files of a channel are stored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/filesFolder"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Get Files Folder Content",
					"value": "Team Template Definition Team Definition Channels Get Files Folder Content",
					"action": "Get content for the navigation property filesFolder from teamTemplateDefinition",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/filesFolder/content"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Update Files Folder Content",
					"value": "Team Template Definition Team Definition Channels Update Files Folder Content",
					"action": "Update content for the navigation property filesFolder in teamTemplateDefinition",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/filesFolder/content"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels List Members",
					"value": "Team Template Definition Team Definition Channels List Members",
					"action": "List members of channel",
					"description": "Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Create Members",
					"value": "Team Template Definition Team Definition Channels Create Members",
					"action": "Add member to channel",
					"description": "Add a conversationMember to a channel. This operation is allowed only for channels with a **membershipType** value of `private` or `shared`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Delete Members",
					"value": "Team Template Definition Team Definition Channels Delete Members",
					"action": "Delete navigation property members for teamTemplateDefinition",
					"description": "Delete navigation property members for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Get Members",
					"value": "Team Template Definition Team Definition Channels Get Members",
					"action": "Get members from teamTemplateDefinition",
					"description": "A collection of membership records associated with the channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Update Members",
					"value": "Team Template Definition Team Definition Channels Update Members",
					"action": "Update the navigation property members in teamTemplateDefinition",
					"description": "Update the navigation property members in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels List Messages",
					"value": "Team Template Definition Team Definition Channels List Messages",
					"action": "List channel messages",
					"description": "Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Create Messages",
					"value": "Team Template Definition Team Definition Channels Create Messages",
					"action": "Send chatMessage in a channel or a chat",
					"description": "Send a new chatMessage in the specified channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Delete Messages",
					"value": "Team Template Definition Team Definition Channels Delete Messages",
					"action": "Delete navigation property messages for teamTemplateDefinition",
					"description": "Delete navigation property messages for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Get Messages",
					"value": "Team Template Definition Team Definition Channels Get Messages",
					"action": "Get messages from teamTemplateDefinition",
					"description": "A collection of all the messages in the channel. A navigation property. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Update Messages",
					"value": "Team Template Definition Team Definition Channels Update Messages",
					"action": "Update the navigation property messages in teamTemplateDefinition",
					"description": "Update the navigation property messages in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages List Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Create Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"description": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Delete Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for teamTemplateDefinition",
					"description": "Delete navigation property hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Get Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Get Hosted Contents",
					"action": "Get hostedContents from teamTemplateDefinition",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Update Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in teamTemplateDefinition",
					"description": "Update the navigation property hostedContents in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages List Replies",
					"value": "Team Template Definition Team Definition Channels Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Create Replies",
					"value": "Team Template Definition Team Definition Channels Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Delete Replies",
					"value": "Team Template Definition Team Definition Channels Messages Delete Replies",
					"action": "Delete navigation property replies for teamTemplateDefinition",
					"description": "Delete navigation property replies for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Get Replies",
					"value": "Team Template Definition Team Definition Channels Messages Get Replies",
					"action": "Get replies from teamTemplateDefinition",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Update Replies",
					"value": "Team Template Definition Team Definition Channels Messages Update Replies",
					"action": "Update the navigation property replies in teamTemplateDefinition",
					"description": "Update the navigation property replies in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Replies List Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Replies Create Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"description": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Replies Delete Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for teamTemplateDefinition",
					"description": "Delete navigation property hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Replies Get Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from teamTemplateDefinition",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Messages Replies Update Hosted Contents",
					"value": "Team Template Definition Team Definition Channels Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in teamTemplateDefinition",
					"description": "Update the navigation property hostedContents in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels List Shared With Teams",
					"value": "Team Template Definition Team Definition Channels List Shared With Teams",
					"action": "List sharedWithChannelTeamInfo",
					"description": "Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Create Shared With Teams",
					"value": "Team Template Definition Team Definition Channels Create Shared With Teams",
					"action": "Create new navigation property to sharedWithTeams for teamTemplateDefinition",
					"description": "Create new navigation property to sharedWithTeams for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Delete Shared With Teams",
					"value": "Team Template Definition Team Definition Channels Delete Shared With Teams",
					"action": "Delete navigation property sharedWithTeams for teamTemplateDefinition",
					"description": "Delete navigation property sharedWithTeams for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Get Shared With Teams",
					"value": "Team Template Definition Team Definition Channels Get Shared With Teams",
					"action": "Get sharedWithTeams from teamTemplateDefinition",
					"description": "A collection of teams with which a channel is shared.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Update Shared With Teams",
					"value": "Team Template Definition Team Definition Channels Update Shared With Teams",
					"action": "Update the navigation property sharedWithTeams in teamTemplateDefinition",
					"description": "Update the navigation property sharedWithTeams in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Shared With Teams List Allowed Members",
					"value": "Team Template Definition Team Definition Channels Shared With Teams List Allowed Members",
					"action": "List allowedMembers",
					"description": "Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:\n- Users with `Guest` role\n- Users who are externally authenticated in the tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Shared With Teams Get Allowed Members",
					"value": "Team Template Definition Team Definition Channels Shared With Teams Get Allowed Members",
					"action": "Get allowedMembers from teamTemplateDefinition",
					"description": "A collection of team members who have access to the shared channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels List Tabs",
					"value": "Team Template Definition Team Definition Channels List Tabs",
					"action": "List tabs in channel",
					"description": "Retrieve the list of tabs in the specified channel within a team. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Create Tabs",
					"value": "Team Template Definition Team Definition Channels Create Tabs",
					"action": "Create new navigation property to tabs for teamTemplateDefinition",
					"description": "Create new navigation property to tabs for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Delete Tabs",
					"value": "Team Template Definition Team Definition Channels Delete Tabs",
					"action": "Delete navigation property tabs for teamTemplateDefinition",
					"description": "Delete navigation property tabs for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Get Tabs",
					"value": "Team Template Definition Team Definition Channels Get Tabs",
					"action": "Get tabs from teamTemplateDefinition",
					"description": "A collection of all the tabs in the channel. A navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Update Tabs",
					"value": "Team Template Definition Team Definition Channels Update Tabs",
					"action": "Update the navigation property tabs in teamTemplateDefinition",
					"description": "Update the navigation property tabs in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Channels Tabs Get Teams App",
					"value": "Team Template Definition Team Definition Channels Tabs Get Teams App",
					"action": "Get teamsApp from teamTemplateDefinition",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Group",
					"value": "Team Template Definition Team Definition Get Group",
					"action": "Get group from teamTemplateDefinition",
					"description": "Get group from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/group"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Incoming Channels",
					"value": "Team Template Definition Team Definition List Incoming Channels",
					"action": "List incomingChannels",
					"description": "Get the list of incoming channels (channels shared with a team).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/incomingChannels"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Incoming Channels",
					"value": "Team Template Definition Team Definition Get Incoming Channels",
					"action": "Get incomingChannels from teamTemplateDefinition",
					"description": "List of channels shared with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/incomingChannels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Installed Apps",
					"value": "Team Template Definition Team Definition List Installed Apps",
					"action": "List apps in team",
					"description": "Retrieve the list of apps installed in the specified team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Create Installed Apps",
					"value": "Team Template Definition Team Definition Create Installed Apps",
					"action": "Add app to team",
					"description": "Install an app to the specified team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Installed Apps",
					"value": "Team Template Definition Team Definition Delete Installed Apps",
					"action": "Delete navigation property installedApps for teamTemplateDefinition",
					"description": "Delete navigation property installedApps for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Installed Apps",
					"value": "Team Template Definition Team Definition Get Installed Apps",
					"action": "Get installedApps from teamTemplateDefinition",
					"description": "The apps installed in this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Installed Apps",
					"value": "Team Template Definition Team Definition Update Installed Apps",
					"action": "Update the navigation property installedApps in teamTemplateDefinition",
					"description": "Update the navigation property installedApps in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Installed Apps Get Teams App",
					"value": "Team Template Definition Team Definition Installed Apps Get Teams App",
					"action": "Get teamsApp from teamTemplateDefinition",
					"description": "The app that is installed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Installed Apps Get Teams App Definition",
					"value": "Team Template Definition Team Definition Installed Apps Get Teams App Definition",
					"action": "Get teamsAppDefinition from teamTemplateDefinition",
					"description": "The details of this version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsAppDefinition"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Members",
					"value": "Team Template Definition Team Definition List Members",
					"action": "List members of team",
					"description": "Get the conversationMember collection of a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Create Members",
					"value": "Team Template Definition Team Definition Create Members",
					"action": "Add member to team",
					"description": "Add a new conversation member to a team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Members",
					"value": "Team Template Definition Team Definition Delete Members",
					"action": "Delete navigation property members for teamTemplateDefinition",
					"description": "Delete navigation property members for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Members",
					"value": "Team Template Definition Team Definition Get Members",
					"action": "Get members from teamTemplateDefinition",
					"description": "Members and owners of the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Members",
					"value": "Team Template Definition Team Definition Update Members",
					"action": "Update the navigation property members in teamTemplateDefinition",
					"description": "Update the navigation property members in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Operations",
					"value": "Team Template Definition Team Definition List Operations",
					"action": "Get operations from teamTemplateDefinition",
					"description": "The async operations that ran or are running on this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/operations"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Create Operations",
					"value": "Team Template Definition Team Definition Create Operations",
					"action": "Create new navigation property to operations for teamTemplateDefinition",
					"description": "Create new navigation property to operations for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/operations"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Operations",
					"value": "Team Template Definition Team Definition Delete Operations",
					"action": "Delete navigation property operations for teamTemplateDefinition",
					"description": "Delete navigation property operations for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Operations",
					"value": "Team Template Definition Team Definition Get Operations",
					"action": "Get operations from teamTemplateDefinition",
					"description": "The async operations that ran or are running on this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Operations",
					"value": "Team Template Definition Team Definition Update Operations",
					"action": "Update the navigation property operations in teamTemplateDefinition",
					"description": "Update the navigation property operations in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Owners",
					"value": "Team Template Definition Team Definition List Owners",
					"action": "Get owners from teamTemplateDefinition",
					"description": "The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/owners"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Owners",
					"value": "Team Template Definition Team Definition Get Owners",
					"action": "Get owners from teamTemplateDefinition",
					"description": "The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/owners/{{$parameter[\"user-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Permission Grants",
					"value": "Team Template Definition Team Definition List Permission Grants",
					"action": "List permissionGrants of a team",
					"description": "List all resource-specific permission grants on the team. This list specifies the Azure AD apps that have access to the **team**, along with the corresponding kind of resource-specific access that each app has.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Create Permission Grants",
					"value": "Team Template Definition Team Definition Create Permission Grants",
					"action": "Create new navigation property to permissionGrants for teamTemplateDefinition",
					"description": "Create new navigation property to permissionGrants for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Permission Grants",
					"value": "Team Template Definition Team Definition Delete Permission Grants",
					"action": "Delete navigation property permissionGrants for teamTemplateDefinition",
					"description": "Delete navigation property permissionGrants for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Permission Grants",
					"value": "Team Template Definition Team Definition Get Permission Grants",
					"action": "Get permissionGrants from teamTemplateDefinition",
					"description": "A collection of permissions granted to apps to access the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Permission Grants",
					"value": "Team Template Definition Team Definition Update Permission Grants",
					"action": "Update the navigation property permissionGrants in teamTemplateDefinition",
					"description": "Update the navigation property permissionGrants in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Photo",
					"value": "Team Template Definition Team Definition Delete Photo",
					"action": "Delete navigation property photo for teamTemplateDefinition",
					"description": "Delete navigation property photo for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/photo"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Photo",
					"value": "Team Template Definition Team Definition Get Photo",
					"action": "Get photo from teamTemplateDefinition",
					"description": "The team photo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/photo"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Photo",
					"value": "Team Template Definition Team Definition Update Photo",
					"action": "Update the navigation property photo in teamTemplateDefinition",
					"description": "Update the navigation property photo in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/photo"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Photo Content",
					"value": "Team Template Definition Team Definition Get Photo Content",
					"action": "Get media content for the navigation property photo from teamTemplateDefinition",
					"description": "Get media content for the navigation property photo from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/photo/$value"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Photo Content",
					"value": "Team Template Definition Team Definition Update Photo Content",
					"action": "Update media content for the navigation property photo in teamTemplateDefinition",
					"description": "Update media content for the navigation property photo in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/photo/$value"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Primary Channel",
					"value": "Team Template Definition Team Definition Delete Primary Channel",
					"action": "Delete navigation property primaryChannel for teamTemplateDefinition",
					"description": "Delete navigation property primaryChannel for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Primary Channel",
					"value": "Team Template Definition Team Definition Get Primary Channel",
					"action": "Get primaryChannel",
					"description": "Get the default channel, **General**, of a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Primary Channel",
					"value": "Team Template Definition Team Definition Update Primary Channel",
					"action": "Update the navigation property primaryChannel in teamTemplateDefinition",
					"description": "Update the navigation property primaryChannel in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Get Files Folder",
					"value": "Team Template Definition Team Definition Primary Channel Get Files Folder",
					"action": "Get filesFolder",
					"description": "Get the metadata for the location where the files of a channel are stored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/filesFolder"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Get Files Folder Content",
					"value": "Team Template Definition Team Definition Primary Channel Get Files Folder Content",
					"action": "Get content for the navigation property filesFolder from teamTemplateDefinition",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/filesFolder/content"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Update Files Folder Content",
					"value": "Team Template Definition Team Definition Primary Channel Update Files Folder Content",
					"action": "Update content for the navigation property filesFolder in teamTemplateDefinition",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/filesFolder/content"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel List Members",
					"value": "Team Template Definition Team Definition Primary Channel List Members",
					"action": "List members of channel",
					"description": "Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Create Members",
					"value": "Team Template Definition Team Definition Primary Channel Create Members",
					"action": "Add member to channel",
					"description": "Add a conversationMember to a channel. This operation is allowed only for channels with a **membershipType** value of `private` or `shared`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Delete Members",
					"value": "Team Template Definition Team Definition Primary Channel Delete Members",
					"action": "Delete navigation property members for teamTemplateDefinition",
					"description": "Delete navigation property members for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Get Members",
					"value": "Team Template Definition Team Definition Primary Channel Get Members",
					"action": "Get members from teamTemplateDefinition",
					"description": "A collection of membership records associated with the channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Update Members",
					"value": "Team Template Definition Team Definition Primary Channel Update Members",
					"action": "Update the navigation property members in teamTemplateDefinition",
					"description": "Update the navigation property members in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel List Messages",
					"value": "Team Template Definition Team Definition Primary Channel List Messages",
					"action": "List channel messages",
					"description": "Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Create Messages",
					"value": "Team Template Definition Team Definition Primary Channel Create Messages",
					"action": "Send chatMessage in a channel or a chat",
					"description": "Send a new chatMessage in the specified channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Delete Messages",
					"value": "Team Template Definition Team Definition Primary Channel Delete Messages",
					"action": "Delete navigation property messages for teamTemplateDefinition",
					"description": "Delete navigation property messages for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Get Messages",
					"value": "Team Template Definition Team Definition Primary Channel Get Messages",
					"action": "Get messages from teamTemplateDefinition",
					"description": "A collection of all the messages in the channel. A navigation property. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Update Messages",
					"value": "Team Template Definition Team Definition Primary Channel Update Messages",
					"action": "Update the navigation property messages in teamTemplateDefinition",
					"description": "Update the navigation property messages in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages List Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Create Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"description": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Delete Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for teamTemplateDefinition",
					"description": "Delete navigation property hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Get Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Get Hosted Contents",
					"action": "Get hostedContents from teamTemplateDefinition",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Update Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in teamTemplateDefinition",
					"description": "Update the navigation property hostedContents in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages List Replies",
					"value": "Team Template Definition Team Definition Primary Channel Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Create Replies",
					"value": "Team Template Definition Team Definition Primary Channel Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Delete Replies",
					"value": "Team Template Definition Team Definition Primary Channel Messages Delete Replies",
					"action": "Delete navigation property replies for teamTemplateDefinition",
					"description": "Delete navigation property replies for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Get Replies",
					"value": "Team Template Definition Team Definition Primary Channel Messages Get Replies",
					"action": "Get replies from teamTemplateDefinition",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Update Replies",
					"value": "Team Template Definition Team Definition Primary Channel Messages Update Replies",
					"action": "Update the navigation property replies in teamTemplateDefinition",
					"description": "Update the navigation property replies in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Replies Create Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"description": "Create new navigation property to hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Replies Delete Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for teamTemplateDefinition",
					"description": "Delete navigation property hostedContents for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Replies Get Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from teamTemplateDefinition",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Messages Replies Update Hosted Contents",
					"value": "Team Template Definition Team Definition Primary Channel Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in teamTemplateDefinition",
					"description": "Update the navigation property hostedContents in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel List Shared With Teams",
					"value": "Team Template Definition Team Definition Primary Channel List Shared With Teams",
					"action": "List sharedWithChannelTeamInfo",
					"description": "Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Create Shared With Teams",
					"value": "Team Template Definition Team Definition Primary Channel Create Shared With Teams",
					"action": "Create new navigation property to sharedWithTeams for teamTemplateDefinition",
					"description": "Create new navigation property to sharedWithTeams for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Delete Shared With Teams",
					"value": "Team Template Definition Team Definition Primary Channel Delete Shared With Teams",
					"action": "Delete navigation property sharedWithTeams for teamTemplateDefinition",
					"description": "Delete navigation property sharedWithTeams for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Get Shared With Teams",
					"value": "Team Template Definition Team Definition Primary Channel Get Shared With Teams",
					"action": "Get sharedWithTeams from teamTemplateDefinition",
					"description": "A collection of teams with which a channel is shared.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Update Shared With Teams",
					"value": "Team Template Definition Team Definition Primary Channel Update Shared With Teams",
					"action": "Update the navigation property sharedWithTeams in teamTemplateDefinition",
					"description": "Update the navigation property sharedWithTeams in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members",
					"value": "Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members",
					"action": "List allowedMembers",
					"description": "Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:\n- Users with `Guest` role\n- Users who are externally authenticated in the tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Shared With Teams Get Allowed Members",
					"value": "Team Template Definition Team Definition Primary Channel Shared With Teams Get Allowed Members",
					"action": "Get allowedMembers from teamTemplateDefinition",
					"description": "A collection of team members who have access to the shared channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel List Tabs",
					"value": "Team Template Definition Team Definition Primary Channel List Tabs",
					"action": "List tabs in channel",
					"description": "Retrieve the list of tabs in the specified channel within a team. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/tabs"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Create Tabs",
					"value": "Team Template Definition Team Definition Primary Channel Create Tabs",
					"action": "Create new navigation property to tabs for teamTemplateDefinition",
					"description": "Create new navigation property to tabs for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/tabs"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Delete Tabs",
					"value": "Team Template Definition Team Definition Primary Channel Delete Tabs",
					"action": "Delete navigation property tabs for teamTemplateDefinition",
					"description": "Delete navigation property tabs for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Get Tabs",
					"value": "Team Template Definition Team Definition Primary Channel Get Tabs",
					"action": "Get tabs from teamTemplateDefinition",
					"description": "A collection of all the tabs in the channel. A navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Update Tabs",
					"value": "Team Template Definition Team Definition Primary Channel Update Tabs",
					"action": "Update the navigation property tabs in teamTemplateDefinition",
					"description": "Update the navigation property tabs in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Primary Channel Tabs Get Teams App",
					"value": "Team Template Definition Team Definition Primary Channel Tabs Get Teams App",
					"action": "Get teamsApp from teamTemplateDefinition",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Schedule",
					"value": "Team Template Definition Team Definition Delete Schedule",
					"action": "Delete navigation property schedule for teamTemplateDefinition",
					"description": "Delete navigation property schedule for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Schedule",
					"value": "Team Template Definition Team Definition Get Schedule",
					"action": "Get schedule",
					"description": "Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).\nWhen clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the `provisionStatus` property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the `provisionStatusCode` property. Clients can also inspect the configuration of the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Schedule",
					"value": "Team Template Definition Team Definition Update Schedule",
					"action": "Update the navigation property schedule in teamTemplateDefinition",
					"description": "Update the navigation property schedule in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Offer Shift Requests",
					"value": "Team Template Definition Team Definition Schedule List Offer Shift Requests",
					"action": "List offerShiftRequest",
					"description": "Retrieve the properties and relationships of all offerShiftRequest objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/offerShiftRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Offer Shift Requests",
					"value": "Team Template Definition Team Definition Schedule Create Offer Shift Requests",
					"action": "Create new navigation property to offerShiftRequests for teamTemplateDefinition",
					"description": "Create new navigation property to offerShiftRequests for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/offerShiftRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Offer Shift Requests",
					"value": "Team Template Definition Team Definition Schedule Delete Offer Shift Requests",
					"action": "Delete navigation property offerShiftRequests for teamTemplateDefinition",
					"description": "Delete navigation property offerShiftRequests for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Offer Shift Requests",
					"value": "Team Template Definition Team Definition Schedule Get Offer Shift Requests",
					"action": "Get offerShiftRequests from teamTemplateDefinition",
					"description": "Get offerShiftRequests from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Offer Shift Requests",
					"value": "Team Template Definition Team Definition Schedule Update Offer Shift Requests",
					"action": "Update the navigation property offerShiftRequests in teamTemplateDefinition",
					"description": "Update the navigation property offerShiftRequests in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Open Shift Change Requests",
					"value": "Team Template Definition Team Definition Schedule List Open Shift Change Requests",
					"action": "List openShiftChangeRequests",
					"description": "Retrieve a list of openShiftChangeRequest objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShiftChangeRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Open Shift Change Requests",
					"value": "Team Template Definition Team Definition Schedule Create Open Shift Change Requests",
					"action": "Create openShiftChangeRequest",
					"description": "Create instance of an openShiftChangeRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShiftChangeRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Open Shift Change Requests",
					"value": "Team Template Definition Team Definition Schedule Delete Open Shift Change Requests",
					"action": "Delete navigation property openShiftChangeRequests for teamTemplateDefinition",
					"description": "Delete navigation property openShiftChangeRequests for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Open Shift Change Requests",
					"value": "Team Template Definition Team Definition Schedule Get Open Shift Change Requests",
					"action": "Get openShiftChangeRequests from teamTemplateDefinition",
					"description": "Get openShiftChangeRequests from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Open Shift Change Requests",
					"value": "Team Template Definition Team Definition Schedule Update Open Shift Change Requests",
					"action": "Update the navigation property openShiftChangeRequests in teamTemplateDefinition",
					"description": "Update the navigation property openShiftChangeRequests in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Open Shifts",
					"value": "Team Template Definition Team Definition Schedule List Open Shifts",
					"action": "List openShift",
					"description": "List openshift objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShifts"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Open Shifts",
					"value": "Team Template Definition Team Definition Schedule Create Open Shifts",
					"action": "Create new navigation property to openShifts for teamTemplateDefinition",
					"description": "Create new navigation property to openShifts for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShifts"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Open Shifts",
					"value": "Team Template Definition Team Definition Schedule Delete Open Shifts",
					"action": "Delete navigation property openShifts for teamTemplateDefinition",
					"description": "Delete navigation property openShifts for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Open Shifts",
					"value": "Team Template Definition Team Definition Schedule Get Open Shifts",
					"action": "Get openShifts from teamTemplateDefinition",
					"description": "Get openShifts from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Open Shifts",
					"value": "Team Template Definition Team Definition Schedule Update Open Shifts",
					"action": "Update the navigation property openShifts in teamTemplateDefinition",
					"description": "Update the navigation property openShifts in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Scheduling Groups",
					"value": "Team Template Definition Team Definition Schedule List Scheduling Groups",
					"action": "List scheduleGroups",
					"description": "Get the list of schedulingGroups in this schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/schedulingGroups"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Scheduling Groups",
					"value": "Team Template Definition Team Definition Schedule Create Scheduling Groups",
					"action": "Create schedulingGroup",
					"description": "Create a new schedulingGroup.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/schedulingGroups"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Scheduling Groups",
					"value": "Team Template Definition Team Definition Schedule Delete Scheduling Groups",
					"action": "Delete navigation property schedulingGroups for teamTemplateDefinition",
					"description": "Delete navigation property schedulingGroups for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Scheduling Groups",
					"value": "Team Template Definition Team Definition Schedule Get Scheduling Groups",
					"action": "Get schedulingGroups from teamTemplateDefinition",
					"description": "The logical grouping of users in the schedule (usually by role).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Scheduling Groups",
					"value": "Team Template Definition Team Definition Schedule Update Scheduling Groups",
					"action": "Update the navigation property schedulingGroups in teamTemplateDefinition",
					"description": "Update the navigation property schedulingGroups in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Shifts",
					"value": "Team Template Definition Team Definition Schedule List Shifts",
					"action": "List shifts",
					"description": "Get the list of shift instances in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/shifts"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Shifts",
					"value": "Team Template Definition Team Definition Schedule Create Shifts",
					"action": "Create shift",
					"description": "Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/shifts"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Shifts",
					"value": "Team Template Definition Team Definition Schedule Delete Shifts",
					"action": "Delete navigation property shifts for teamTemplateDefinition",
					"description": "Delete navigation property shifts for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Shifts",
					"value": "Team Template Definition Team Definition Schedule Get Shifts",
					"action": "Get shifts from teamTemplateDefinition",
					"description": "The shifts in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Shifts",
					"value": "Team Template Definition Team Definition Schedule Update Shifts",
					"action": "Update the navigation property shifts in teamTemplateDefinition",
					"description": "Update the navigation property shifts in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Swap Shifts Change Requests",
					"value": "Team Template Definition Team Definition Schedule List Swap Shifts Change Requests",
					"action": "List swapShiftsChangeRequest",
					"description": "Retrieve a list of swapShiftsChangeRequest objects in the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/swapShiftsChangeRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Swap Shifts Change Requests",
					"value": "Team Template Definition Team Definition Schedule Create Swap Shifts Change Requests",
					"action": "Create swapShiftsChangeRequest",
					"description": "Create an instance of a swapShiftsChangeRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/swapShiftsChangeRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Swap Shifts Change Requests",
					"value": "Team Template Definition Team Definition Schedule Delete Swap Shifts Change Requests",
					"action": "Delete navigation property swapShiftsChangeRequests for teamTemplateDefinition",
					"description": "Delete navigation property swapShiftsChangeRequests for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Swap Shifts Change Requests",
					"value": "Team Template Definition Team Definition Schedule Get Swap Shifts Change Requests",
					"action": "Get swapShiftsChangeRequests from teamTemplateDefinition",
					"description": "Get swapShiftsChangeRequests from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Swap Shifts Change Requests",
					"value": "Team Template Definition Team Definition Schedule Update Swap Shifts Change Requests",
					"action": "Update the navigation property swapShiftsChangeRequests in teamTemplateDefinition",
					"description": "Update the navigation property swapShiftsChangeRequests in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Time Cards",
					"value": "Team Template Definition Team Definition Schedule List Time Cards",
					"action": "List timeCard",
					"description": "Retrieve a list of timeCard entries in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Time Cards",
					"value": "Team Template Definition Team Definition Schedule Create Time Cards",
					"action": "Create new navigation property to timeCards for teamTemplateDefinition",
					"description": "Create new navigation property to timeCards for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Time Cards",
					"value": "Team Template Definition Team Definition Schedule Delete Time Cards",
					"action": "Delete navigation property timeCards for teamTemplateDefinition",
					"description": "Delete navigation property timeCards for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Time Cards",
					"value": "Team Template Definition Team Definition Schedule Get Time Cards",
					"action": "Get timeCards from teamTemplateDefinition",
					"description": "Get timeCards from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Time Cards",
					"value": "Team Template Definition Team Definition Schedule Update Time Cards",
					"action": "Update the navigation property timeCards in teamTemplateDefinition",
					"description": "Update the navigation property timeCards in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Time Off Reasons",
					"value": "Team Template Definition Team Definition Schedule List Time Off Reasons",
					"action": "List timeOffReasons",
					"description": "Get the list of timeOffReasons in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffReasons"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Time Off Reasons",
					"value": "Team Template Definition Team Definition Schedule Create Time Off Reasons",
					"action": "Create timeOffReason",
					"description": "Create a new timeOffReason.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffReasons"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Time Off Reasons",
					"value": "Team Template Definition Team Definition Schedule Delete Time Off Reasons",
					"action": "Delete navigation property timeOffReasons for teamTemplateDefinition",
					"description": "Delete navigation property timeOffReasons for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Time Off Reasons",
					"value": "Team Template Definition Team Definition Schedule Get Time Off Reasons",
					"action": "Get timeOffReasons from teamTemplateDefinition",
					"description": "The set of reasons for a time off in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Time Off Reasons",
					"value": "Team Template Definition Team Definition Schedule Update Time Off Reasons",
					"action": "Update the navigation property timeOffReasons in teamTemplateDefinition",
					"description": "Update the navigation property timeOffReasons in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Time Off Requests",
					"value": "Team Template Definition Team Definition Schedule List Time Off Requests",
					"action": "List timeOffRequest",
					"description": "Retrieve a list of timeoffrequest objects in the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Time Off Requests",
					"value": "Team Template Definition Team Definition Schedule Create Time Off Requests",
					"action": "Create new navigation property to timeOffRequests for teamTemplateDefinition",
					"description": "Create new navigation property to timeOffRequests for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffRequests"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Time Off Requests",
					"value": "Team Template Definition Team Definition Schedule Delete Time Off Requests",
					"action": "Delete navigation property timeOffRequests for teamTemplateDefinition",
					"description": "Delete navigation property timeOffRequests for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Time Off Requests",
					"value": "Team Template Definition Team Definition Schedule Get Time Off Requests",
					"action": "Get timeOffRequests from teamTemplateDefinition",
					"description": "Get timeOffRequests from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Time Off Requests",
					"value": "Team Template Definition Team Definition Schedule Update Time Off Requests",
					"action": "Update the navigation property timeOffRequests in teamTemplateDefinition",
					"description": "Update the navigation property timeOffRequests in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule List Times Off",
					"value": "Team Template Definition Team Definition Schedule List Times Off",
					"action": "List timesOff",
					"description": "Get the list of timeOff instances in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timesOff"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Create Times Off",
					"value": "Team Template Definition Team Definition Schedule Create Times Off",
					"action": "Create timeOff",
					"description": "Create a new timeOff instance in a schedule.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timesOff"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Delete Times Off",
					"value": "Team Template Definition Team Definition Schedule Delete Times Off",
					"action": "Delete navigation property timesOff for teamTemplateDefinition",
					"description": "Delete navigation property timesOff for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Get Times Off",
					"value": "Team Template Definition Team Definition Schedule Get Times Off",
					"action": "Get timesOff from teamTemplateDefinition",
					"description": "The instances of times off in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Schedule Update Times Off",
					"value": "Team Template Definition Team Definition Schedule Update Times Off",
					"action": "Update the navigation property timesOff in teamTemplateDefinition",
					"description": "Update the navigation property timesOff in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition List Tags",
					"value": "Team Template Definition Team Definition List Tags",
					"action": "List teamworkTags",
					"description": "Get a list of the tag objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Create Tags",
					"value": "Team Template Definition Team Definition Create Tags",
					"action": "Create teamworkTag",
					"description": "Create a standard tag for members in the team. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Delete Tags",
					"value": "Team Template Definition Team Definition Delete Tags",
					"action": "Delete navigation property tags for teamTemplateDefinition",
					"description": "Delete navigation property tags for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Tags",
					"value": "Team Template Definition Team Definition Get Tags",
					"action": "Get tags from teamTemplateDefinition",
					"description": "The tags associated with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Update Tags",
					"value": "Team Template Definition Team Definition Update Tags",
					"action": "Update the navigation property tags in teamTemplateDefinition",
					"description": "Update the navigation property tags in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Tags List Members",
					"value": "Team Template Definition Team Definition Tags List Members",
					"action": "List members in a teamworkTag",
					"description": "Get a list of the members of a standard tag in a team and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Tags Create Members",
					"value": "Team Template Definition Team Definition Tags Create Members",
					"action": "Create teamworkTagMember",
					"description": "Create a new teamworkTagMember object in a team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}/members"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Tags Delete Members",
					"value": "Team Template Definition Team Definition Tags Delete Members",
					"action": "Delete navigation property members for teamTemplateDefinition",
					"description": "Delete navigation property members for teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Tags Get Members",
					"value": "Team Template Definition Team Definition Tags Get Members",
					"action": "Get members from teamTemplateDefinition",
					"description": "Users assigned to the tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Tags Update Members",
					"value": "Team Template Definition Team Definition Tags Update Members",
					"action": "Update the navigation property members in teamTemplateDefinition",
					"description": "Update the navigation property members in teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Template",
					"value": "Team Template Definition Team Definition Get Template",
					"action": "Get template from teamTemplateDefinition",
					"description": "The template this team was created from. See available templates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/template"
						}
					}
				},
				{
					"name": "Team Template Definition Team Definition Get Template Definition",
					"value": "Team Template Definition Team Definition Get Template Definition",
					"action": "Get templateDefinition from teamTemplateDefinition",
					"description": "Get templateDefinition from teamTemplateDefinition",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamTemplateDefinition/{{$parameter[\"teamTemplateDefinition-id\"]}}/teamDefinition/templateDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Delete Team Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Delete Team Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Get Team Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Get Team Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Get Team Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Update Team Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Update Team Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List All Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/allChannels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get All Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get All Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Files Folder"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Files Folder"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Files Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/filesFolder/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Delete Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Delete Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Get Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Get Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Delete Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams List Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams Get Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams Get Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Shared With Teams Get Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Tabs Get Teams App"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Tabs Get Teams App"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Channels Tabs Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Group"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Group"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Incoming Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/incomingChannels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Incoming Channels"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Incoming Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Installed Apps"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Installed Apps Get Teams App"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Installed Apps Get Teams App"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Installed Apps Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Installed Apps Get Teams App Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Installed Apps Get Teams App Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Installed Apps Get Teams App Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Operations"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/operations/{teamsAsyncOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/owners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Owners"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/owners/{user-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Owners"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Owners"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Permission Grants"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Photo"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Photo"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Photo"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Primary Channel"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Primary Channel"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Primary Channel"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Files Folder"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Files Folder"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Files Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/filesFolder/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Messages"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Delete Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Delete Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Get Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Get Replies"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Delete Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Get Hosted Contents"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Shared With Teams"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams List Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams Get Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams Get Allowed Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Shared With Teams Get Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Tabs"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Tabs Get Teams App"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Tabs Get Teams App"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Primary Channel Tabs Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Schedule"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Schedule"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Schedule"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Offer Shift Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/offerShiftRequests/{offerShiftRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Open Shift Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Open Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/openShifts/{openShift-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Scheduling Groups"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/schedulingGroups/{schedulingGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Shifts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Shifts"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/shifts/{shift-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Swap Shifts Change Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Time Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Time Cards"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Time Cards"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Cards"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Cards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Time Cards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeCards/{timeCard-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Time Cards"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Off Reasons"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffReasons/{timeOffReason-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Off Requests"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timeOffRequests/{timeOffRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule List Times Off"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Times Off"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Create Times Off"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Delete Times Off"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Times Off"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Get Times Off"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Times Off"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/schedule/timesOff/{timeOff-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Schedule Update Times Off"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Create Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Delete Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Tags"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Update Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Delete Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Get Members"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/tags/{teamworkTag-id}/members/{teamworkTagMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Tags Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/template",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Template"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Template"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Template"
					]
				}
			}
		},
		{
			"displayName": "GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/templateDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Template Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Template Definition"
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
						"Team Template Definition Team"
					],
					"operation": [
						"Team Template Definition Team Definition Get Template Definition"
					]
				}
			}
		},
];
