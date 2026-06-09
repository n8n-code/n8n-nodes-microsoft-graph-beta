import type { INodeProperties } from 'n8n-workflow';

export const teamworkDeletedTeamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					]
				}
			},
			"options": [
				{
					"name": "Teamwork List Deleted Teams",
					"value": "Teamwork List Deleted Teams",
					"action": "List deletedTeams",
					"description": "Get a list of the deletedTeam objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams"
						}
					}
				},
				{
					"name": "Teamwork Create Deleted Teams",
					"value": "Teamwork Create Deleted Teams",
					"action": "Create new navigation property to deletedTeams for teamwork",
					"description": "Create new navigation property to deletedTeams for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams"
						}
					}
				},
				{
					"name": "Teamwork Delete Deleted Teams",
					"value": "Teamwork Delete Deleted Teams",
					"action": "Delete navigation property deletedTeams for teamwork",
					"description": "Delete navigation property deletedTeams for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Get Deleted Teams",
					"value": "Teamwork Get Deleted Teams",
					"action": "Get deletedTeams from teamwork",
					"description": "A collection of deleted teams.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Update Deleted Teams",
					"value": "Teamwork Update Deleted Teams",
					"action": "Update the navigation property deletedTeams in teamwork",
					"description": "Update the navigation property deletedTeams in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams List Channels",
					"value": "Teamwork Deleted Teams List Channels",
					"action": "Get channels from teamwork",
					"description": "The channels those are either shared with this deleted team or created in this deleted team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Create Channels",
					"value": "Teamwork Deleted Teams Create Channels",
					"action": "Create new navigation property to channels for teamwork",
					"description": "Create new navigation property to channels for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Delete Channels",
					"value": "Teamwork Deleted Teams Delete Channels",
					"action": "Delete navigation property channels for teamwork",
					"description": "Delete navigation property channels for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Get Channels",
					"value": "Teamwork Deleted Teams Get Channels",
					"action": "Get channels from teamwork",
					"description": "The channels those are either shared with this deleted team or created in this deleted team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Update Channels",
					"value": "Teamwork Deleted Teams Update Channels",
					"action": "Update the navigation property channels in teamwork",
					"description": "Update the navigation property channels in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Get Files Folder",
					"value": "Teamwork Deleted Teams Channels Get Files Folder",
					"action": "Get filesFolder",
					"description": "Get the metadata for the location where the files of a channel are stored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/filesFolder"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Get Files Folder Content",
					"value": "Teamwork Deleted Teams Channels Get Files Folder Content",
					"action": "Get content for the navigation property filesFolder from teamwork",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/filesFolder/content"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Update Files Folder Content",
					"value": "Teamwork Deleted Teams Channels Update Files Folder Content",
					"action": "Update content for the navigation property filesFolder in teamwork",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/filesFolder/content"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels List Members",
					"value": "Teamwork Deleted Teams Channels List Members",
					"action": "List members of channel",
					"description": "Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/members"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Create Members",
					"value": "Teamwork Deleted Teams Channels Create Members",
					"action": "Add member to channel",
					"description": "Add a conversationMember to a channel. This operation is allowed only for channels with a **membershipType** value of `private` or `shared`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/members"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Delete Members",
					"value": "Teamwork Deleted Teams Channels Delete Members",
					"action": "Delete navigation property members for teamwork",
					"description": "Delete navigation property members for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Get Members",
					"value": "Teamwork Deleted Teams Channels Get Members",
					"action": "Get members from teamwork",
					"description": "A collection of membership records associated with the channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Update Members",
					"value": "Teamwork Deleted Teams Channels Update Members",
					"action": "Update the navigation property members in teamwork",
					"description": "Update the navigation property members in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels List Messages",
					"value": "Teamwork Deleted Teams Channels List Messages",
					"action": "List channel messages",
					"description": "Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Create Messages",
					"value": "Teamwork Deleted Teams Channels Create Messages",
					"action": "Send chatMessage in a channel or a chat",
					"description": "Send a new chatMessage in the specified channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Delete Messages",
					"value": "Teamwork Deleted Teams Channels Delete Messages",
					"action": "Delete navigation property messages for teamwork",
					"description": "Delete navigation property messages for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Get Messages",
					"value": "Teamwork Deleted Teams Channels Get Messages",
					"action": "Get messages from teamwork",
					"description": "A collection of all the messages in the channel. A navigation property. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Update Messages",
					"value": "Teamwork Deleted Teams Channels Update Messages",
					"action": "Update the navigation property messages in teamwork",
					"description": "Update the navigation property messages in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages List Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Create Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for teamwork",
					"description": "Create new navigation property to hostedContents for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Delete Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for teamwork",
					"description": "Delete navigation property hostedContents for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Get Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Get Hosted Contents",
					"action": "Get hostedContents from teamwork",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Update Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in teamwork",
					"description": "Update the navigation property hostedContents in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages List Replies",
					"value": "Teamwork Deleted Teams Channels Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Create Replies",
					"value": "Teamwork Deleted Teams Channels Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Delete Replies",
					"value": "Teamwork Deleted Teams Channels Messages Delete Replies",
					"action": "Delete navigation property replies for teamwork",
					"description": "Delete navigation property replies for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Get Replies",
					"value": "Teamwork Deleted Teams Channels Messages Get Replies",
					"action": "Get replies from teamwork",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Update Replies",
					"value": "Teamwork Deleted Teams Channels Messages Update Replies",
					"action": "Update the navigation property replies in teamwork",
					"description": "Update the navigation property replies in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Replies List Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Replies Create Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for teamwork",
					"description": "Create new navigation property to hostedContents for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Replies Delete Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for teamwork",
					"description": "Delete navigation property hostedContents for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Replies Get Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from teamwork",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Messages Replies Update Hosted Contents",
					"value": "Teamwork Deleted Teams Channels Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in teamwork",
					"description": "Update the navigation property hostedContents in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels List Shared With Teams",
					"value": "Teamwork Deleted Teams Channels List Shared With Teams",
					"action": "List sharedWithChannelTeamInfo",
					"description": "Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Create Shared With Teams",
					"value": "Teamwork Deleted Teams Channels Create Shared With Teams",
					"action": "Create new navigation property to sharedWithTeams for teamwork",
					"description": "Create new navigation property to sharedWithTeams for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Delete Shared With Teams",
					"value": "Teamwork Deleted Teams Channels Delete Shared With Teams",
					"action": "Delete navigation property sharedWithTeams for teamwork",
					"description": "Delete navigation property sharedWithTeams for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Get Shared With Teams",
					"value": "Teamwork Deleted Teams Channels Get Shared With Teams",
					"action": "Get sharedWithTeams from teamwork",
					"description": "A collection of teams with which a channel is shared.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Update Shared With Teams",
					"value": "Teamwork Deleted Teams Channels Update Shared With Teams",
					"action": "Update the navigation property sharedWithTeams in teamwork",
					"description": "Update the navigation property sharedWithTeams in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Shared With Teams List Allowed Members",
					"value": "Teamwork Deleted Teams Channels Shared With Teams List Allowed Members",
					"action": "List allowedMembers",
					"description": "Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:\n- Users with `Guest` role\n- Users who are externally authenticated in the tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Shared With Teams Get Allowed Members",
					"value": "Teamwork Deleted Teams Channels Shared With Teams Get Allowed Members",
					"action": "Get allowedMembers from teamwork",
					"description": "A collection of team members who have access to the shared channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels List Tabs",
					"value": "Teamwork Deleted Teams Channels List Tabs",
					"action": "List tabs in channel",
					"description": "Retrieve the list of tabs in the specified channel within a team. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Create Tabs",
					"value": "Teamwork Deleted Teams Channels Create Tabs",
					"action": "Create new navigation property to tabs for teamwork",
					"description": "Create new navigation property to tabs for teamwork",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Delete Tabs",
					"value": "Teamwork Deleted Teams Channels Delete Tabs",
					"action": "Delete navigation property tabs for teamwork",
					"description": "Delete navigation property tabs for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Get Tabs",
					"value": "Teamwork Deleted Teams Channels Get Tabs",
					"action": "Get tabs from teamwork",
					"description": "A collection of all the tabs in the channel. A navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Update Tabs",
					"value": "Teamwork Deleted Teams Channels Update Tabs",
					"action": "Update the navigation property tabs in teamwork",
					"description": "Update the navigation property tabs in teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Teamwork Deleted Teams Channels Tabs Get Teams App",
					"value": "Teamwork Deleted Teams Channels Tabs Get Teams App",
					"action": "Get teamsApp from teamwork",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/deletedTeams/{{$parameter[\"deletedTeam-id\"]}}/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teamwork/deletedTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork List Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Create Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Create Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Delete Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Delete Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Get Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Get Deleted Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Get Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Update Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Update Deleted Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams List Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Create Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Create Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Delete Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Delete Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Get Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Get Channels"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Get Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Update Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Update Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Files Folder"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Files Folder"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Files Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Messages"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Delete Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Get Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Get Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Delete Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Get Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Get Replies"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Delete Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Get Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Get Hosted Contents"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Shared With Teams"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams List Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams Get Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams Get Allowed Members"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Shared With Teams Get Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Tabs"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Tabs Get Teams App"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Tabs Get Teams App"
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
						"Teamwork Deleted Team"
					],
					"operation": [
						"Teamwork Deleted Teams Channels Tabs Get Teams App"
					]
				}
			}
		},
];
