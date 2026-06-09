import type { INodeProperties } from 'n8n-workflow';

export const groupsTeamDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					]
				}
			},
			"options": [
				{
					"name": "Groups Delete Team",
					"value": "Groups Delete Team",
					"action": "Delete navigation property team for groups",
					"description": "Delete navigation property team for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team"
						}
					}
				},
				{
					"name": "Groups Get Team",
					"value": "Groups Get Team",
					"action": "Get team from groups",
					"description": "The team associated with this group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team"
						}
					}
				},
				{
					"name": "Groups Update Team",
					"value": "Groups Update Team",
					"action": "Create team from group",
					"description": "Create a new team from a group. In order to create a team, the group must have a least one owner. If the group was created less than 15 minutes ago, it's possible for the Create team call to fail with a 404 error code due to replication delays.\nThe recommended pattern is to retry the Create team call three times, with a 10 second delay between calls.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team"
						}
					}
				},
				{
					"name": "Groups Team List All Channels",
					"value": "Groups Team List All Channels",
					"action": "List allChannels",
					"description": "Get the list of channels either in this team or shared with this team (incoming channels).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/allChannels"
						}
					}
				},
				{
					"name": "Groups Team Get All Channels",
					"value": "Groups Team Get All Channels",
					"action": "Get allChannels from groups",
					"description": "List of channels either hosted in or shared with the team (incoming channels).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/allChannels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team List Channels",
					"value": "Groups Team List Channels",
					"action": "List channels",
					"description": "Retrieve the list of channels in this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels"
						}
					}
				},
				{
					"name": "Groups Team Create Channels",
					"value": "Groups Team Create Channels",
					"action": "Create channel",
					"description": "Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel's `displayName` is 50 characters. This is the name that appears to the user in Microsoft Teams. You can add a maximum of 200 members when you create a private channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels"
						}
					}
				},
				{
					"name": "Groups Team Delete Channels",
					"value": "Groups Team Delete Channels",
					"action": "Delete navigation property channels for groups",
					"description": "Delete navigation property channels for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Channels",
					"value": "Groups Team Get Channels",
					"action": "Get channels from groups",
					"description": "The collection of channels and messages associated with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Update Channels",
					"value": "Groups Team Update Channels",
					"action": "Update the navigation property channels in groups",
					"description": "Update the navigation property channels in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Get Files Folder",
					"value": "Groups Team Channels Get Files Folder",
					"action": "Get filesFolder",
					"description": "Get the metadata for the location where the files of a channel are stored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/filesFolder"
						}
					}
				},
				{
					"name": "Groups Team Channels Get Files Folder Content",
					"value": "Groups Team Channels Get Files Folder Content",
					"action": "Get content for the navigation property filesFolder from groups",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/filesFolder/content"
						}
					}
				},
				{
					"name": "Groups Team Channels Update Files Folder Content",
					"value": "Groups Team Channels Update Files Folder Content",
					"action": "Update content for the navigation property filesFolder in groups",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/filesFolder/content"
						}
					}
				},
				{
					"name": "Groups Team Channels List Members",
					"value": "Groups Team Channels List Members",
					"action": "List members of channel",
					"description": "Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/members"
						}
					}
				},
				{
					"name": "Groups Team Channels Create Members",
					"value": "Groups Team Channels Create Members",
					"action": "Add member to channel",
					"description": "Add a conversationMember to a channel. This operation is allowed only for channels with a **membershipType** value of `private` or `shared`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/members"
						}
					}
				},
				{
					"name": "Groups Team Channels Delete Members",
					"value": "Groups Team Channels Delete Members",
					"action": "Delete navigation property members for groups",
					"description": "Delete navigation property members for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Get Members",
					"value": "Groups Team Channels Get Members",
					"action": "Get members from groups",
					"description": "A collection of membership records associated with the channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Update Members",
					"value": "Groups Team Channels Update Members",
					"action": "Update the navigation property members in groups",
					"description": "Update the navigation property members in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels List Messages",
					"value": "Groups Team Channels List Messages",
					"action": "List channel messages",
					"description": "Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Groups Team Channels Create Messages",
					"value": "Groups Team Channels Create Messages",
					"action": "Send chatMessage in a channel or a chat",
					"description": "Send a new chatMessage in the specified channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Groups Team Channels Delete Messages",
					"value": "Groups Team Channels Delete Messages",
					"action": "Delete navigation property messages for groups",
					"description": "Delete navigation property messages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Get Messages",
					"value": "Groups Team Channels Get Messages",
					"action": "Get messages from groups",
					"description": "A collection of all the messages in the channel. A navigation property. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Update Messages",
					"value": "Groups Team Channels Update Messages",
					"action": "Update the navigation property messages in groups",
					"description": "Update the navigation property messages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages List Hosted Contents",
					"value": "Groups Team Channels Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Create Hosted Contents",
					"value": "Groups Team Channels Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for groups",
					"description": "Create new navigation property to hostedContents for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Delete Hosted Contents",
					"value": "Groups Team Channels Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for groups",
					"description": "Delete navigation property hostedContents for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Get Hosted Contents",
					"value": "Groups Team Channels Messages Get Hosted Contents",
					"action": "Get hostedContents from groups",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Update Hosted Contents",
					"value": "Groups Team Channels Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in groups",
					"description": "Update the navigation property hostedContents in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages List Replies",
					"value": "Groups Team Channels Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Create Replies",
					"value": "Groups Team Channels Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Delete Replies",
					"value": "Groups Team Channels Messages Delete Replies",
					"action": "Delete navigation property replies for groups",
					"description": "Delete navigation property replies for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Get Replies",
					"value": "Groups Team Channels Messages Get Replies",
					"action": "Get replies from groups",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Update Replies",
					"value": "Groups Team Channels Messages Update Replies",
					"action": "Update the navigation property replies in groups",
					"description": "Update the navigation property replies in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Replies List Hosted Contents",
					"value": "Groups Team Channels Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Replies Create Hosted Contents",
					"value": "Groups Team Channels Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for groups",
					"description": "Create new navigation property to hostedContents for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Replies Delete Hosted Contents",
					"value": "Groups Team Channels Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for groups",
					"description": "Delete navigation property hostedContents for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Replies Get Hosted Contents",
					"value": "Groups Team Channels Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from groups",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Messages Replies Update Hosted Contents",
					"value": "Groups Team Channels Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in groups",
					"description": "Update the navigation property hostedContents in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels List Shared With Teams",
					"value": "Groups Team Channels List Shared With Teams",
					"action": "List sharedWithChannelTeamInfo",
					"description": "Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams"
						}
					}
				},
				{
					"name": "Groups Team Channels Create Shared With Teams",
					"value": "Groups Team Channels Create Shared With Teams",
					"action": "Create new navigation property to sharedWithTeams for groups",
					"description": "Create new navigation property to sharedWithTeams for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams"
						}
					}
				},
				{
					"name": "Groups Team Channels Delete Shared With Teams",
					"value": "Groups Team Channels Delete Shared With Teams",
					"action": "Delete navigation property sharedWithTeams for groups",
					"description": "Delete navigation property sharedWithTeams for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Get Shared With Teams",
					"value": "Groups Team Channels Get Shared With Teams",
					"action": "Get sharedWithTeams from groups",
					"description": "A collection of teams with which a channel is shared.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Update Shared With Teams",
					"value": "Groups Team Channels Update Shared With Teams",
					"action": "Update the navigation property sharedWithTeams in groups",
					"description": "Update the navigation property sharedWithTeams in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Shared With Teams List Allowed Members",
					"value": "Groups Team Channels Shared With Teams List Allowed Members",
					"action": "List allowedMembers",
					"description": "Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:\n- Users with `Guest` role\n- Users who are externally authenticated in the tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers"
						}
					}
				},
				{
					"name": "Groups Team Channels Shared With Teams Get Allowed Members",
					"value": "Groups Team Channels Shared With Teams Get Allowed Members",
					"action": "Get allowedMembers from groups",
					"description": "A collection of team members who have access to the shared channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels List Tabs",
					"value": "Groups Team Channels List Tabs",
					"action": "List tabs in channel",
					"description": "Retrieve the list of tabs in the specified channel within a team. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Groups Team Channels Create Tabs",
					"value": "Groups Team Channels Create Tabs",
					"action": "Create new navigation property to tabs for groups",
					"description": "Create new navigation property to tabs for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/tabs"
						}
					}
				},
				{
					"name": "Groups Team Channels Delete Tabs",
					"value": "Groups Team Channels Delete Tabs",
					"action": "Delete navigation property tabs for groups",
					"description": "Delete navigation property tabs for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Get Tabs",
					"value": "Groups Team Channels Get Tabs",
					"action": "Get tabs from groups",
					"description": "A collection of all the tabs in the channel. A navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Update Tabs",
					"value": "Groups Team Channels Update Tabs",
					"action": "Update the navigation property tabs in groups",
					"description": "Update the navigation property tabs in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Channels Tabs Get Teams App",
					"value": "Groups Team Channels Tabs Get Teams App",
					"action": "Get teamsApp from groups",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/channels/{{$parameter[\"channel-id\"]}}/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Groups Team Get Group",
					"value": "Groups Team Get Group",
					"action": "Get group from groups",
					"description": "Get group from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/group"
						}
					}
				},
				{
					"name": "Groups Team List Incoming Channels",
					"value": "Groups Team List Incoming Channels",
					"action": "List incomingChannels",
					"description": "Get the list of incoming channels (channels shared with a team).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/incomingChannels"
						}
					}
				},
				{
					"name": "Groups Team Get Incoming Channels",
					"value": "Groups Team Get Incoming Channels",
					"action": "Get incomingChannels from groups",
					"description": "List of channels shared with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/incomingChannels/{{$parameter[\"channel-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team List Installed Apps",
					"value": "Groups Team List Installed Apps",
					"action": "List apps in team",
					"description": "Retrieve the list of apps installed in the specified team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps"
						}
					}
				},
				{
					"name": "Groups Team Create Installed Apps",
					"value": "Groups Team Create Installed Apps",
					"action": "Add app to team",
					"description": "Install an app to the specified team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps"
						}
					}
				},
				{
					"name": "Groups Team Delete Installed Apps",
					"value": "Groups Team Delete Installed Apps",
					"action": "Delete navigation property installedApps for groups",
					"description": "Delete navigation property installedApps for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Installed Apps",
					"value": "Groups Team Get Installed Apps",
					"action": "Get installedApps from groups",
					"description": "The apps installed in this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Update Installed Apps",
					"value": "Groups Team Update Installed Apps",
					"action": "Update the navigation property installedApps in groups",
					"description": "Update the navigation property installedApps in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Installed Apps Get Teams App",
					"value": "Groups Team Installed Apps Get Teams App",
					"action": "Get teamsApp from groups",
					"description": "The app that is installed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Groups Team Installed Apps Get Teams App Definition",
					"value": "Groups Team Installed Apps Get Teams App Definition",
					"action": "Get teamsAppDefinition from groups",
					"description": "The details of this version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsAppDefinition"
						}
					}
				},
				{
					"name": "Groups Team List Members",
					"value": "Groups Team List Members",
					"action": "List members of team",
					"description": "Get the conversationMember collection of a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/members"
						}
					}
				},
				{
					"name": "Groups Team Create Members",
					"value": "Groups Team Create Members",
					"action": "Add member to team",
					"description": "Add a new conversation member to a team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/members"
						}
					}
				},
				{
					"name": "Groups Team Delete Members",
					"value": "Groups Team Delete Members",
					"action": "Delete navigation property members for groups",
					"description": "Delete navigation property members for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Members",
					"value": "Groups Team Get Members",
					"action": "Get members from groups",
					"description": "Members and owners of the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Update Members",
					"value": "Groups Team Update Members",
					"action": "Update the navigation property members in groups",
					"description": "Update the navigation property members in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team List Operations",
					"value": "Groups Team List Operations",
					"action": "Get operations from groups",
					"description": "The async operations that ran or are running on this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/operations"
						}
					}
				},
				{
					"name": "Groups Team Create Operations",
					"value": "Groups Team Create Operations",
					"action": "Create new navigation property to operations for groups",
					"description": "Create new navigation property to operations for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/operations"
						}
					}
				},
				{
					"name": "Groups Team Delete Operations",
					"value": "Groups Team Delete Operations",
					"action": "Delete navigation property operations for groups",
					"description": "Delete navigation property operations for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Operations",
					"value": "Groups Team Get Operations",
					"action": "Get operations from groups",
					"description": "The async operations that ran or are running on this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Update Operations",
					"value": "Groups Team Update Operations",
					"action": "Update the navigation property operations in groups",
					"description": "Update the navigation property operations in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team List Owners",
					"value": "Groups Team List Owners",
					"action": "Get owners from groups",
					"description": "The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/owners"
						}
					}
				},
				{
					"name": "Groups Team Get Owners",
					"value": "Groups Team Get Owners",
					"action": "Get owners from groups",
					"description": "The list of this team's owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user delegated permissions, no owner can be specified (the current user is the owner). Owner must be specified as an object ID (GUID), not a UPN.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/owners/{{$parameter[\"user-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team List Permission Grants",
					"value": "Groups Team List Permission Grants",
					"action": "List permissionGrants of a team",
					"description": "List all resource-specific permission grants on the team. This list specifies the Azure AD apps that have access to the **team**, along with the corresponding kind of resource-specific access that each app has.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants"
						}
					}
				},
				{
					"name": "Groups Team Create Permission Grants",
					"value": "Groups Team Create Permission Grants",
					"action": "Create new navigation property to permissionGrants for groups",
					"description": "Create new navigation property to permissionGrants for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants"
						}
					}
				},
				{
					"name": "Groups Team Delete Permission Grants",
					"value": "Groups Team Delete Permission Grants",
					"action": "Delete navigation property permissionGrants for groups",
					"description": "Delete navigation property permissionGrants for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Permission Grants",
					"value": "Groups Team Get Permission Grants",
					"action": "Get permissionGrants from groups",
					"description": "A collection of permissions granted to apps to access the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Update Permission Grants",
					"value": "Groups Team Update Permission Grants",
					"action": "Update the navigation property permissionGrants in groups",
					"description": "Update the navigation property permissionGrants in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Delete Photo",
					"value": "Groups Team Delete Photo",
					"action": "Delete navigation property photo for groups",
					"description": "Delete navigation property photo for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/photo"
						}
					}
				},
				{
					"name": "Groups Team Get Photo",
					"value": "Groups Team Get Photo",
					"action": "Get photo from groups",
					"description": "The team photo.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/photo"
						}
					}
				},
				{
					"name": "Groups Team Update Photo",
					"value": "Groups Team Update Photo",
					"action": "Update the navigation property photo in groups",
					"description": "Update the navigation property photo in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/photo"
						}
					}
				},
				{
					"name": "Groups Team Get Photo Content",
					"value": "Groups Team Get Photo Content",
					"action": "Get media content for the navigation property photo from groups",
					"description": "Get media content for the navigation property photo from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/photo/$value"
						}
					}
				},
				{
					"name": "Groups Team Update Photo Content",
					"value": "Groups Team Update Photo Content",
					"action": "Update media content for the navigation property photo in groups",
					"description": "Update media content for the navigation property photo in groups",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/photo/$value"
						}
					}
				},
				{
					"name": "Groups Team Delete Primary Channel",
					"value": "Groups Team Delete Primary Channel",
					"action": "Delete navigation property primaryChannel for groups",
					"description": "Delete navigation property primaryChannel for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel"
						}
					}
				},
				{
					"name": "Groups Team Get Primary Channel",
					"value": "Groups Team Get Primary Channel",
					"action": "Get primaryChannel",
					"description": "Get the default channel, **General**, of a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel"
						}
					}
				},
				{
					"name": "Groups Team Update Primary Channel",
					"value": "Groups Team Update Primary Channel",
					"action": "Update the navigation property primaryChannel in groups",
					"description": "Update the navigation property primaryChannel in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Get Files Folder",
					"value": "Groups Team Primary Channel Get Files Folder",
					"action": "Get filesFolder",
					"description": "Get the metadata for the location where the files of a channel are stored.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/filesFolder"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Get Files Folder Content",
					"value": "Groups Team Primary Channel Get Files Folder Content",
					"action": "Get content for the navigation property filesFolder from groups",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/filesFolder/content"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Update Files Folder Content",
					"value": "Groups Team Primary Channel Update Files Folder Content",
					"action": "Update content for the navigation property filesFolder in groups",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/filesFolder/content"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel List Members",
					"value": "Groups Team Primary Channel List Members",
					"action": "List members of channel",
					"description": "Retrieve a list of conversationMembers from a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve the channel member list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/members"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Create Members",
					"value": "Groups Team Primary Channel Create Members",
					"action": "Add member to channel",
					"description": "Add a conversationMember to a channel. This operation is allowed only for channels with a **membershipType** value of `private` or `shared`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/members"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Delete Members",
					"value": "Groups Team Primary Channel Delete Members",
					"action": "Delete navigation property members for groups",
					"description": "Delete navigation property members for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Get Members",
					"value": "Groups Team Primary Channel Get Members",
					"action": "Get members from groups",
					"description": "A collection of membership records associated with the channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Update Members",
					"value": "Groups Team Primary Channel Update Members",
					"action": "Update the navigation property members in groups",
					"description": "Update the navigation property members in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel List Messages",
					"value": "Groups Team Primary Channel List Messages",
					"action": "List channel messages",
					"description": "Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Create Messages",
					"value": "Groups Team Primary Channel Create Messages",
					"action": "Send chatMessage in a channel or a chat",
					"description": "Send a new chatMessage in the specified channel or a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Delete Messages",
					"value": "Groups Team Primary Channel Delete Messages",
					"action": "Delete navigation property messages for groups",
					"description": "Delete navigation property messages for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Get Messages",
					"value": "Groups Team Primary Channel Get Messages",
					"action": "Get messages from groups",
					"description": "A collection of all the messages in the channel. A navigation property. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Update Messages",
					"value": "Groups Team Primary Channel Update Messages",
					"action": "Update the navigation property messages in groups",
					"description": "Update the navigation property messages in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages List Hosted Contents",
					"value": "Groups Team Primary Channel Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Create Hosted Contents",
					"value": "Groups Team Primary Channel Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for groups",
					"description": "Create new navigation property to hostedContents for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Delete Hosted Contents",
					"value": "Groups Team Primary Channel Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for groups",
					"description": "Delete navigation property hostedContents for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Get Hosted Contents",
					"value": "Groups Team Primary Channel Messages Get Hosted Contents",
					"action": "Get hostedContents from groups",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Update Hosted Contents",
					"value": "Groups Team Primary Channel Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in groups",
					"description": "Update the navigation property hostedContents in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages List Replies",
					"value": "Groups Team Primary Channel Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Create Replies",
					"value": "Groups Team Primary Channel Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Delete Replies",
					"value": "Groups Team Primary Channel Messages Delete Replies",
					"action": "Delete navigation property replies for groups",
					"description": "Delete navigation property replies for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Get Replies",
					"value": "Groups Team Primary Channel Messages Get Replies",
					"action": "Get replies from groups",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Update Replies",
					"value": "Groups Team Primary Channel Messages Update Replies",
					"action": "Update the navigation property replies in groups",
					"description": "Update the navigation property replies in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Replies List Hosted Contents",
					"value": "Groups Team Primary Channel Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Replies Create Hosted Contents",
					"value": "Groups Team Primary Channel Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for groups",
					"description": "Create new navigation property to hostedContents for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Replies Delete Hosted Contents",
					"value": "Groups Team Primary Channel Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for groups",
					"description": "Delete navigation property hostedContents for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Replies Get Hosted Contents",
					"value": "Groups Team Primary Channel Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from groups",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Messages Replies Update Hosted Contents",
					"value": "Groups Team Primary Channel Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in groups",
					"description": "Update the navigation property hostedContents in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel List Shared With Teams",
					"value": "Groups Team Primary Channel List Shared With Teams",
					"action": "List sharedWithChannelTeamInfo",
					"description": "Get the list of teams that has been shared a specified channel. This operation is allowed only for channels with a **membershipType** value of `shared`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Create Shared With Teams",
					"value": "Groups Team Primary Channel Create Shared With Teams",
					"action": "Create new navigation property to sharedWithTeams for groups",
					"description": "Create new navigation property to sharedWithTeams for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Delete Shared With Teams",
					"value": "Groups Team Primary Channel Delete Shared With Teams",
					"action": "Delete navigation property sharedWithTeams for groups",
					"description": "Delete navigation property sharedWithTeams for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Get Shared With Teams",
					"value": "Groups Team Primary Channel Get Shared With Teams",
					"action": "Get sharedWithTeams from groups",
					"description": "A collection of teams with which a channel is shared.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Update Shared With Teams",
					"value": "Groups Team Primary Channel Update Shared With Teams",
					"action": "Update the navigation property sharedWithTeams in groups",
					"description": "Update the navigation property sharedWithTeams in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Shared With Teams List Allowed Members",
					"value": "Groups Team Primary Channel Shared With Teams List Allowed Members",
					"action": "List allowedMembers",
					"description": "Get the list of conversationMembers who can access a shared channel. This method does not return the following conversationMembers from the team:\n- Users with `Guest` role\n- Users who are externally authenticated in the tenant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Shared With Teams Get Allowed Members",
					"value": "Groups Team Primary Channel Shared With Teams Get Allowed Members",
					"action": "Get allowedMembers from groups",
					"description": "A collection of team members who have access to the shared channel.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/sharedWithTeams/{{$parameter[\"sharedWithChannelTeamInfo-id\"]}}/allowedMembers/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel List Tabs",
					"value": "Groups Team Primary Channel List Tabs",
					"action": "List tabs in channel",
					"description": "Retrieve the list of tabs in the specified channel within a team. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/tabs"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Create Tabs",
					"value": "Groups Team Primary Channel Create Tabs",
					"action": "Create new navigation property to tabs for groups",
					"description": "Create new navigation property to tabs for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/tabs"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Delete Tabs",
					"value": "Groups Team Primary Channel Delete Tabs",
					"action": "Delete navigation property tabs for groups",
					"description": "Delete navigation property tabs for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Get Tabs",
					"value": "Groups Team Primary Channel Get Tabs",
					"action": "Get tabs from groups",
					"description": "A collection of all the tabs in the channel. A navigation property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Update Tabs",
					"value": "Groups Team Primary Channel Update Tabs",
					"action": "Update the navigation property tabs in groups",
					"description": "Update the navigation property tabs in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Primary Channel Tabs Get Teams App",
					"value": "Groups Team Primary Channel Tabs Get Teams App",
					"action": "Get teamsApp from groups",
					"description": "The application that is linked to the tab.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/primaryChannel/tabs/{{$parameter[\"teamsTab-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Groups Team Delete Schedule",
					"value": "Groups Team Delete Schedule",
					"action": "Delete navigation property schedule for groups",
					"description": "Delete navigation property schedule for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule"
						}
					}
				},
				{
					"name": "Groups Team Get Schedule",
					"value": "Groups Team Get Schedule",
					"action": "Get schedule",
					"description": "Retrieve the properties and relationships of a schedule object. The schedule creation process conforms to the One API guideline for resource based long running operations (RELO).\nWhen clients use the PUT method, if the schedule is provisioned, the operation updates the schedule; otherwise, the operation starts the schedule provisioning process in the background. During schedule provisioning, clients can use the GET method to get the schedule and look at the `provisionStatus` property for the current state of the provisioning. If the provisioning failed, clients can get additional information from the `provisionStatusCode` property. Clients can also inspect the configuration of the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule"
						}
					}
				},
				{
					"name": "Groups Team Update Schedule",
					"value": "Groups Team Update Schedule",
					"action": "Update the navigation property schedule in groups",
					"description": "Update the navigation property schedule in groups",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Offer Shift Requests",
					"value": "Groups Team Schedule List Offer Shift Requests",
					"action": "List offerShiftRequest",
					"description": "Retrieve the properties and relationships of all offerShiftRequest objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/offerShiftRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Offer Shift Requests",
					"value": "Groups Team Schedule Create Offer Shift Requests",
					"action": "Create new navigation property to offerShiftRequests for groups",
					"description": "Create new navigation property to offerShiftRequests for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/offerShiftRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Offer Shift Requests",
					"value": "Groups Team Schedule Delete Offer Shift Requests",
					"action": "Delete navigation property offerShiftRequests for groups",
					"description": "Delete navigation property offerShiftRequests for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Offer Shift Requests",
					"value": "Groups Team Schedule Get Offer Shift Requests",
					"action": "Get offerShiftRequests from groups",
					"description": "Get offerShiftRequests from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Offer Shift Requests",
					"value": "Groups Team Schedule Update Offer Shift Requests",
					"action": "Update the navigation property offerShiftRequests in groups",
					"description": "Update the navigation property offerShiftRequests in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/offerShiftRequests/{{$parameter[\"offerShiftRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Open Shift Change Requests",
					"value": "Groups Team Schedule List Open Shift Change Requests",
					"action": "List openShiftChangeRequests",
					"description": "Retrieve a list of openShiftChangeRequest objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShiftChangeRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Open Shift Change Requests",
					"value": "Groups Team Schedule Create Open Shift Change Requests",
					"action": "Create openShiftChangeRequest",
					"description": "Create instance of an openShiftChangeRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShiftChangeRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Open Shift Change Requests",
					"value": "Groups Team Schedule Delete Open Shift Change Requests",
					"action": "Delete navigation property openShiftChangeRequests for groups",
					"description": "Delete navigation property openShiftChangeRequests for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Open Shift Change Requests",
					"value": "Groups Team Schedule Get Open Shift Change Requests",
					"action": "Get openShiftChangeRequests from groups",
					"description": "Get openShiftChangeRequests from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Open Shift Change Requests",
					"value": "Groups Team Schedule Update Open Shift Change Requests",
					"action": "Update the navigation property openShiftChangeRequests in groups",
					"description": "Update the navigation property openShiftChangeRequests in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShiftChangeRequests/{{$parameter[\"openShiftChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Open Shifts",
					"value": "Groups Team Schedule List Open Shifts",
					"action": "List openShift",
					"description": "List openshift objects in a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShifts"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Open Shifts",
					"value": "Groups Team Schedule Create Open Shifts",
					"action": "Create new navigation property to openShifts for groups",
					"description": "Create new navigation property to openShifts for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShifts"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Open Shifts",
					"value": "Groups Team Schedule Delete Open Shifts",
					"action": "Delete navigation property openShifts for groups",
					"description": "Delete navigation property openShifts for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Open Shifts",
					"value": "Groups Team Schedule Get Open Shifts",
					"action": "Get openShifts from groups",
					"description": "Get openShifts from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Open Shifts",
					"value": "Groups Team Schedule Update Open Shifts",
					"action": "Update the navigation property openShifts in groups",
					"description": "Update the navigation property openShifts in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/openShifts/{{$parameter[\"openShift-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Scheduling Groups",
					"value": "Groups Team Schedule List Scheduling Groups",
					"action": "List scheduleGroups",
					"description": "Get the list of schedulingGroups in this schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/schedulingGroups"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Scheduling Groups",
					"value": "Groups Team Schedule Create Scheduling Groups",
					"action": "Create schedulingGroup",
					"description": "Create a new schedulingGroup.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/schedulingGroups"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Scheduling Groups",
					"value": "Groups Team Schedule Delete Scheduling Groups",
					"action": "Delete navigation property schedulingGroups for groups",
					"description": "Delete navigation property schedulingGroups for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Scheduling Groups",
					"value": "Groups Team Schedule Get Scheduling Groups",
					"action": "Get schedulingGroups from groups",
					"description": "The logical grouping of users in the schedule (usually by role).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Scheduling Groups",
					"value": "Groups Team Schedule Update Scheduling Groups",
					"action": "Update the navigation property schedulingGroups in groups",
					"description": "Update the navigation property schedulingGroups in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/schedulingGroups/{{$parameter[\"schedulingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Shifts",
					"value": "Groups Team Schedule List Shifts",
					"action": "List shifts",
					"description": "Get the list of shift instances in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/shifts"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Shifts",
					"value": "Groups Team Schedule Create Shifts",
					"action": "Create shift",
					"description": "Create a new shift instance in a schedule. The duration of a shift cannot be less than 1 minute or longer than 24 hours.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/shifts"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Shifts",
					"value": "Groups Team Schedule Delete Shifts",
					"action": "Delete navigation property shifts for groups",
					"description": "Delete navigation property shifts for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Shifts",
					"value": "Groups Team Schedule Get Shifts",
					"action": "Get shifts from groups",
					"description": "The shifts in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Shifts",
					"value": "Groups Team Schedule Update Shifts",
					"action": "Update the navigation property shifts in groups",
					"description": "Update the navigation property shifts in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/shifts/{{$parameter[\"shift-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Swap Shifts Change Requests",
					"value": "Groups Team Schedule List Swap Shifts Change Requests",
					"action": "List swapShiftsChangeRequest",
					"description": "Retrieve a list of swapShiftsChangeRequest objects in the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/swapShiftsChangeRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Swap Shifts Change Requests",
					"value": "Groups Team Schedule Create Swap Shifts Change Requests",
					"action": "Create swapShiftsChangeRequest",
					"description": "Create an instance of a swapShiftsChangeRequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/swapShiftsChangeRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Swap Shifts Change Requests",
					"value": "Groups Team Schedule Delete Swap Shifts Change Requests",
					"action": "Delete navigation property swapShiftsChangeRequests for groups",
					"description": "Delete navigation property swapShiftsChangeRequests for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Swap Shifts Change Requests",
					"value": "Groups Team Schedule Get Swap Shifts Change Requests",
					"action": "Get swapShiftsChangeRequests from groups",
					"description": "Get swapShiftsChangeRequests from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Swap Shifts Change Requests",
					"value": "Groups Team Schedule Update Swap Shifts Change Requests",
					"action": "Update the navigation property swapShiftsChangeRequests in groups",
					"description": "Update the navigation property swapShiftsChangeRequests in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/swapShiftsChangeRequests/{{$parameter[\"swapShiftsChangeRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Time Cards",
					"value": "Groups Team Schedule List Time Cards",
					"action": "List timeCard",
					"description": "Retrieve a list of timeCard entries in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Time Cards",
					"value": "Groups Team Schedule Create Time Cards",
					"action": "Create new navigation property to timeCards for groups",
					"description": "Create new navigation property to timeCards for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Time Cards",
					"value": "Groups Team Schedule Delete Time Cards",
					"action": "Delete navigation property timeCards for groups",
					"description": "Delete navigation property timeCards for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Time Cards",
					"value": "Groups Team Schedule Get Time Cards",
					"action": "Get timeCards from groups",
					"description": "Get timeCards from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Time Cards",
					"value": "Groups Team Schedule Update Time Cards",
					"action": "Update the navigation property timeCards in groups",
					"description": "Update the navigation property timeCards in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeCards/{{$parameter[\"timeCard-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Time Off Reasons",
					"value": "Groups Team Schedule List Time Off Reasons",
					"action": "List timeOffReasons",
					"description": "Get the list of timeOffReasons in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffReasons"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Time Off Reasons",
					"value": "Groups Team Schedule Create Time Off Reasons",
					"action": "Create timeOffReason",
					"description": "Create a new timeOffReason.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffReasons"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Time Off Reasons",
					"value": "Groups Team Schedule Delete Time Off Reasons",
					"action": "Delete navigation property timeOffReasons for groups",
					"description": "Delete navigation property timeOffReasons for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Time Off Reasons",
					"value": "Groups Team Schedule Get Time Off Reasons",
					"action": "Get timeOffReasons from groups",
					"description": "The set of reasons for a time off in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Time Off Reasons",
					"value": "Groups Team Schedule Update Time Off Reasons",
					"action": "Update the navigation property timeOffReasons in groups",
					"description": "Update the navigation property timeOffReasons in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffReasons/{{$parameter[\"timeOffReason-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Time Off Requests",
					"value": "Groups Team Schedule List Time Off Requests",
					"action": "List timeOffRequest",
					"description": "Retrieve a list of timeoffrequest objects in the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Time Off Requests",
					"value": "Groups Team Schedule Create Time Off Requests",
					"action": "Create new navigation property to timeOffRequests for groups",
					"description": "Create new navigation property to timeOffRequests for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffRequests"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Time Off Requests",
					"value": "Groups Team Schedule Delete Time Off Requests",
					"action": "Delete navigation property timeOffRequests for groups",
					"description": "Delete navigation property timeOffRequests for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Time Off Requests",
					"value": "Groups Team Schedule Get Time Off Requests",
					"action": "Get timeOffRequests from groups",
					"description": "Get timeOffRequests from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Time Off Requests",
					"value": "Groups Team Schedule Update Time Off Requests",
					"action": "Update the navigation property timeOffRequests in groups",
					"description": "Update the navigation property timeOffRequests in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timeOffRequests/{{$parameter[\"timeOffRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule List Times Off",
					"value": "Groups Team Schedule List Times Off",
					"action": "List timesOff",
					"description": "Get the list of timeOff instances in a schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timesOff"
						}
					}
				},
				{
					"name": "Groups Team Schedule Create Times Off",
					"value": "Groups Team Schedule Create Times Off",
					"action": "Create timeOff",
					"description": "Create a new timeOff instance in a schedule.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timesOff"
						}
					}
				},
				{
					"name": "Groups Team Schedule Delete Times Off",
					"value": "Groups Team Schedule Delete Times Off",
					"action": "Delete navigation property timesOff for groups",
					"description": "Delete navigation property timesOff for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Get Times Off",
					"value": "Groups Team Schedule Get Times Off",
					"action": "Get timesOff from groups",
					"description": "The instances of times off in the schedule.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Schedule Update Times Off",
					"value": "Groups Team Schedule Update Times Off",
					"action": "Update the navigation property timesOff in groups",
					"description": "Update the navigation property timesOff in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/schedule/timesOff/{{$parameter[\"timeOff-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team List Tags",
					"value": "Groups Team List Tags",
					"action": "List teamworkTags",
					"description": "Get a list of the tag objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags"
						}
					}
				},
				{
					"name": "Groups Team Create Tags",
					"value": "Groups Team Create Tags",
					"action": "Create teamworkTag",
					"description": "Create a standard tag for members in the team. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags"
						}
					}
				},
				{
					"name": "Groups Team Delete Tags",
					"value": "Groups Team Delete Tags",
					"action": "Delete navigation property tags for groups",
					"description": "Delete navigation property tags for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Tags",
					"value": "Groups Team Get Tags",
					"action": "Get tags from groups",
					"description": "The tags associated with the team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Update Tags",
					"value": "Groups Team Update Tags",
					"action": "Update the navigation property tags in groups",
					"description": "Update the navigation property tags in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Tags List Members",
					"value": "Groups Team Tags List Members",
					"action": "List members in a teamworkTag",
					"description": "Get a list of the members of a standard tag in a team and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}/members"
						}
					}
				},
				{
					"name": "Groups Team Tags Create Members",
					"value": "Groups Team Tags Create Members",
					"action": "Create teamworkTagMember",
					"description": "Create a new teamworkTagMember object in a team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}/members"
						}
					}
				},
				{
					"name": "Groups Team Tags Delete Members",
					"value": "Groups Team Tags Delete Members",
					"action": "Delete navigation property members for groups",
					"description": "Delete navigation property members for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Tags Get Members",
					"value": "Groups Team Tags Get Members",
					"action": "Get members from groups",
					"description": "Users assigned to the tag.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Tags Update Members",
					"value": "Groups Team Tags Update Members",
					"action": "Update the navigation property members in groups",
					"description": "Update the navigation property members in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/tags/{{$parameter[\"teamworkTag-id\"]}}/members/{{$parameter[\"teamworkTagMember-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Team Get Template",
					"value": "Groups Team Get Template",
					"action": "Get template from groups",
					"description": "The template this team was created from. See available templates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/template"
						}
					}
				},
				{
					"name": "Groups Team Get Template Definition",
					"value": "Groups Team Get Template Definition",
					"action": "Get templateDefinition from groups",
					"description": "Get templateDefinition from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/team/templateDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /groups/{group-id}/team",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Delete Team"
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
						"Groups Team"
					],
					"operation": [
						"Groups Delete Team"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Get Team"
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
						"Groups Team"
					],
					"operation": [
						"Groups Get Team"
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
						"Groups Team"
					],
					"operation": [
						"Groups Get Team"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Update Team"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Update Team"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/allChannels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List All Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/allChannels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get All Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get All Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Channels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Channels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/filesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Files Folder"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Files Folder"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Files Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/channels/{channel-id}/filesFolder/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Delete Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Delete Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Get Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Get Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Delete Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams List Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams Get Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams Get Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Shared With Teams Get Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/channels/{channel-id}/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/channels/{channel-id}/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Tabs Get Teams App"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Tabs Get Teams App"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Channels Tabs Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Group"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Group"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Group"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/incomingChannels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Incoming Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/incomingChannels/{channel-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Incoming Channels"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Incoming Channels"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Installed Apps"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Installed Apps Get Teams App"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Installed Apps Get Teams App"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Installed Apps Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Installed Apps Get Teams App Definition"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Installed Apps Get Teams App Definition"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Installed Apps Get Teams App Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Operations"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/operations/{teamsAsyncOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/owners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Owners"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/owners/{user-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Owners"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Owners"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Permission Grants"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Permission Grants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Photo"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Photo"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Photo"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Primary Channel"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Primary Channel"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Primary Channel"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Primary Channel"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/filesFolder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Files Folder"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Files Folder"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Files Folder"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/primaryChannel/filesFolder/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/primaryChannel/filesFolder/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Files Folder Content"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Messages"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Delete Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Delete Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Get Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Get Replies"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Delete Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Get Hosted Contents"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/sharedWithTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/sharedWithTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Shared With Teams"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Shared With Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams List Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/sharedWithTeams/{sharedWithChannelTeamInfo-id}/allowedMembers/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams Get Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams Get Allowed Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Shared With Teams Get Allowed Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel List Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/tabs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/primaryChannel/tabs<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Create Tabs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Delete Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Tabs"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Get Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Update Tabs"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/primaryChannel/tabs/{teamsTab-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Tabs Get Teams App"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Tabs Get Teams App"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Primary Channel Tabs Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Schedule"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Schedule"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Schedule"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/schedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Schedule"
					]
				}
			}
		},
		{
			"displayName": "PUT /groups/{group-id}/team/schedule<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Schedule"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/offerShiftRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/offerShiftRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/offerShiftRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Offer Shift Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/offerShiftRequests/{offerShiftRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Offer Shift Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/openShiftChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/openShiftChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/openShiftChangeRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Open Shift Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/openShiftChangeRequests/{openShiftChangeRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Open Shift Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/openShifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/openShifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/openShifts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Open Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/openShifts/{openShift-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Open Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/schedulingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/schedulingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/schedulingGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Scheduling Groups"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/schedulingGroups/{schedulingGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Scheduling Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/shifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/shifts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Shifts"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/shifts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Shifts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Shifts"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Shifts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/shifts/{shift-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Shifts"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/swapShiftsChangeRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Swap Shifts Change Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/swapShiftsChangeRequests/{swapShiftsChangeRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Swap Shifts Change Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timeCards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Time Cards"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeCards<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Time Cards"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Time Cards"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Cards"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Cards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Time Cards"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timeCards/{timeCard-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Time Cards"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timeOffReasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeOffReasons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeOffReasons<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Off Reasons"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timeOffReasons/{timeOffReason-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Time Off Reasons"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timeOffRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeOffRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timeOffRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Off Requests"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timeOffRequests/{timeOffRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Time Off Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timesOff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule List Times Off"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timesOff",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Times Off"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/schedule/timesOff<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Create Times Off"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Delete Times Off"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Times Off"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Get Times Off"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Times Off"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/schedule/timesOff/{timeOff-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Schedule Update Times Off"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/tags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Create Tags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Delete Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Tags"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/tags/{teamworkTag-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Tags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/tags/{teamworkTag-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Update Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/tags/{teamworkTag-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/tags/{teamworkTag-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/team/tags/{teamworkTag-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Delete Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Get Members"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/team/tags/{teamworkTag-id}/members/{teamworkTagMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Tags Update Members"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/template",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Template"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Template"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Template"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/team/templateDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Template Definition"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Template Definition"
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
						"Groups Team"
					],
					"operation": [
						"Groups Team Get Template Definition"
					]
				}
			}
		},
];
