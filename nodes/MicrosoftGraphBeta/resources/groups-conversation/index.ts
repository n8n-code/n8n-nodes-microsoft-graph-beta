import type { INodeProperties } from 'n8n-workflow';

export const groupsConversationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Conversations",
					"value": "Groups List Conversations",
					"action": "List conversations",
					"description": "Retrieve the list of conversations in this group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations"
						}
					}
				},
				{
					"name": "Groups Create Conversations",
					"value": "Groups Create Conversations",
					"action": "Create conversation",
					"description": "Create a new conversation by including a thread and a post. Use reply thread or reply post to further post to that conversation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations"
						}
					}
				},
				{
					"name": "Groups Delete Conversations",
					"value": "Groups Delete Conversations",
					"action": "Delete navigation property conversations for groups",
					"description": "Delete navigation property conversations for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Conversations",
					"value": "Groups Get Conversations",
					"action": "Get conversations from groups",
					"description": "The group's conversations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations List Threads",
					"value": "Groups Conversations List Threads",
					"action": "List threads",
					"description": "Get all the threads in a group conversation.\nNote: You can also get all the threads of a group. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads"
						}
					}
				},
				{
					"name": "Groups Conversations Create Threads",
					"value": "Groups Conversations Create Threads",
					"action": "Create new navigation property to threads for groups",
					"description": "Create new navigation property to threads for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads"
						}
					}
				},
				{
					"name": "Groups Conversations Delete Threads",
					"value": "Groups Conversations Delete Threads",
					"action": "Delete navigation property threads for groups",
					"description": "Delete navigation property threads for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Get Threads",
					"value": "Groups Conversations Get Threads",
					"action": "Get threads from groups",
					"description": "A collection of all the conversation threads in the conversation. A navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Update Threads",
					"value": "Groups Conversations Update Threads",
					"action": "Update the navigation property threads in groups",
					"description": "Update the navigation property threads in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads List Posts",
					"value": "Groups Conversations Threads List Posts",
					"action": "List posts",
					"description": "Get the posts of the specified thread. You can specify both the parent conversation and the thread, or, \nyou can specify the thread without referencing the parent conversation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Get Posts",
					"value": "Groups Conversations Threads Get Posts",
					"action": "Get posts from groups",
					"description": "Get posts from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Update Posts",
					"value": "Groups Conversations Threads Update Posts",
					"action": "Update the navigation property posts in groups",
					"description": "Update the navigation property posts in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts List Attachments",
					"value": "Groups Conversations Threads Posts List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a post.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Create Attachments",
					"value": "Groups Conversations Threads Posts Create Attachments",
					"action": "Create new navigation property to attachments for groups",
					"description": "Create new navigation property to attachments for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Delete Attachments",
					"value": "Groups Conversations Threads Posts Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Get Attachments",
					"value": "Groups Conversations Threads Posts Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts List Extensions",
					"value": "Groups Conversations Threads Posts List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Create Extensions",
					"value": "Groups Conversations Threads Posts Create Extensions",
					"action": "Create new navigation property to extensions for groups",
					"description": "Create new navigation property to extensions for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Delete Extensions",
					"value": "Groups Conversations Threads Posts Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Get Extensions",
					"value": "Groups Conversations Threads Posts Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Update Extensions",
					"value": "Groups Conversations Threads Posts Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Get In Reply To",
					"value": "Groups Conversations Threads Posts Get In Reply To",
					"action": "Get inReplyTo from groups",
					"description": "The earlier post that this post is replying to in the conversationThread. Read-only. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To List Attachments",
					"value": "Groups Conversations Threads Posts In Reply To List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a post.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/attachments"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Create Attachments",
					"value": "Groups Conversations Threads Posts In Reply To Create Attachments",
					"action": "Create new navigation property to attachments for groups",
					"description": "Create new navigation property to attachments for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/attachments"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Delete Attachments",
					"value": "Groups Conversations Threads Posts In Reply To Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Get Attachments",
					"value": "Groups Conversations Threads Posts In Reply To Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To List Extensions",
					"value": "Groups Conversations Threads Posts In Reply To List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/extensions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Create Extensions",
					"value": "Groups Conversations Threads Posts In Reply To Create Extensions",
					"action": "Create new navigation property to extensions for groups",
					"description": "Create new navigation property to extensions for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/extensions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Delete Extensions",
					"value": "Groups Conversations Threads Posts In Reply To Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Get Extensions",
					"value": "Groups Conversations Threads Posts In Reply To Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the post. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Update Extensions",
					"value": "Groups Conversations Threads Posts In Reply To Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To List Mentions",
					"value": "Groups Conversations Threads Posts In Reply To List Mentions",
					"action": "Get mentions from groups",
					"description": "Get mentions from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/mentions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Create Mentions",
					"value": "Groups Conversations Threads Posts In Reply To Create Mentions",
					"action": "Create new navigation property to mentions for groups",
					"description": "Create new navigation property to mentions for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/mentions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Delete Mentions",
					"value": "Groups Conversations Threads Posts In Reply To Delete Mentions",
					"action": "Delete navigation property mentions for groups",
					"description": "Delete navigation property mentions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Get Mentions",
					"value": "Groups Conversations Threads Posts In Reply To Get Mentions",
					"action": "Get mentions from groups",
					"description": "Get mentions from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Create Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Delete Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Get Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Update Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To List Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Create Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Delete Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Get Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts In Reply To Update Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts In Reply To Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/inReplyTo/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts List Mentions",
					"value": "Groups Conversations Threads Posts List Mentions",
					"action": "Get mentions from groups",
					"description": "Get mentions from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Create Mentions",
					"value": "Groups Conversations Threads Posts Create Mentions",
					"action": "Create new navigation property to mentions for groups",
					"description": "Create new navigation property to mentions for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Delete Mentions",
					"value": "Groups Conversations Threads Posts Delete Mentions",
					"action": "Delete navigation property mentions for groups",
					"description": "Delete navigation property mentions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Get Mentions",
					"value": "Groups Conversations Threads Posts Get Mentions",
					"action": "Get mentions from groups",
					"description": "Get mentions from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts List Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Create Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Delete Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Get Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Update Multi Value Extended Properties",
					"value": "Groups Conversations Threads Posts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts List Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Create Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Delete Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Get Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the post. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Conversations Threads Posts Update Single Value Extended Properties",
					"value": "Groups Conversations Threads Posts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/conversations/{{$parameter[\"conversation-id\"]}}/threads/{{$parameter[\"conversationThread-id\"]}}/posts/{{$parameter[\"post-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups List Conversations"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Create Conversations"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Create Conversations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Delete Conversations"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Delete Conversations"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Get Conversations"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations List Threads"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Create Threads"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Create Threads"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Delete Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Delete Threads"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Get Threads"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Get Threads"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Get Threads"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Update Threads"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Update Threads"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads List Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Get Posts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Get Posts"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Get Posts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Update Posts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Update Posts"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get In Reply To"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get In Reply To"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get In Reply To"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Attachments"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Extensions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts In Reply To Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Mentions"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Multi Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Single Value Extended Properties"
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
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/conversations/{conversation-id}/threads/{conversationThread-id}/posts/{post-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Conversation"
					],
					"operation": [
						"Groups Conversations Threads Posts Update Single Value Extended Properties"
					]
				}
			}
		},
];
