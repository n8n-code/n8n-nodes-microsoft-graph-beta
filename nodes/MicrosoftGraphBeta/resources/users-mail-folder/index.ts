import type { INodeProperties } from 'n8n-workflow';

export const usersMailFolderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					]
				}
			},
			"options": [
				{
					"name": "Users List Mail Folders",
					"value": "Users List Mail Folders",
					"action": "List mailFolders",
					"description": "Get all the mail folders in the specified user's mailbox, including any mail search folders. By default, this operation does not return hidden folders. Use a query parameter _includeHiddenFolders_ to include them in the response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders"
						}
					}
				},
				{
					"name": "Users Create Mail Folders",
					"value": "Users Create Mail Folders",
					"action": "Create MailFolder",
					"description": "Use this API to create a new mail folder in the root folder of the user's mailbox. If you intend a new folder to be hidden, you must set the **isHidden** property to `true` on creation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders"
						}
					}
				},
				{
					"name": "Users Delete Mail Folders",
					"value": "Users Delete Mail Folders",
					"action": "Delete navigation property mailFolders for users",
					"description": "Delete navigation property mailFolders for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Mail Folders",
					"value": "Users Get Mail Folders",
					"action": "Get mailFolders from users",
					"description": "The user's mail folders. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Mail Folders",
					"value": "Users Update Mail Folders",
					"action": "Update the navigation property mailFolders in users",
					"description": "Update the navigation property mailFolders in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders List Child Folders",
					"value": "Users Mail Folders List Child Folders",
					"action": "List childFolders",
					"description": "Get the folder collection under the specified folder. You can use the `.../me/mailFolders` shortcut to get the top-level\nfolder collection and navigate to another folder. By default, this operation does not return hidden folders. Use a query parameter _includeHiddenFolders_ to include them in the response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Users Mail Folders Create Child Folders",
					"value": "Users Mail Folders Create Child Folders",
					"action": "Create child folder",
					"description": "Use this API to create a new child mailFolder. If you intend a new folder to be hidden, you must set the **isHidden** property to `true` on creation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Users Mail Folders Delete Child Folders",
					"value": "Users Mail Folders Delete Child Folders",
					"action": "Delete navigation property childFolders for users",
					"description": "Delete navigation property childFolders for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Get Child Folders",
					"value": "Users Mail Folders Get Child Folders",
					"action": "Get childFolders from users",
					"description": "The collection of child folders in the mailFolder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Update Child Folders",
					"value": "Users Mail Folders Update Child Folders",
					"action": "Update the navigation property childFolders in users",
					"description": "Update the navigation property childFolders in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders List Message Rules",
					"value": "Users Mail Folders Child Folders List Message Rules",
					"action": "Get messageRules from users",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Create Message Rules",
					"value": "Users Mail Folders Child Folders Create Message Rules",
					"action": "Create new navigation property to messageRules for users",
					"description": "Create new navigation property to messageRules for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Delete Message Rules",
					"value": "Users Mail Folders Child Folders Delete Message Rules",
					"action": "Delete navigation property messageRules for users",
					"description": "Delete navigation property messageRules for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Get Message Rules",
					"value": "Users Mail Folders Child Folders Get Message Rules",
					"action": "Get messageRules from users",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Update Message Rules",
					"value": "Users Mail Folders Child Folders Update Message Rules",
					"action": "Update the navigation property messageRules in users",
					"description": "Update the navigation property messageRules in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders List Messages",
					"value": "Users Mail Folders Child Folders List Messages",
					"action": "List messages",
					"description": "List all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Create Messages",
					"value": "Users Mail Folders Child Folders Create Messages",
					"action": "Create Message",
					"description": "Use this API to create a new Message in a mailfolder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Delete Messages",
					"value": "Users Mail Folders Child Folders Delete Messages",
					"action": "Delete navigation property messages for users",
					"description": "Delete navigation property messages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Get Messages",
					"value": "Users Mail Folders Child Folders Get Messages",
					"action": "Get messages from users",
					"description": "The collection of messages in the mailFolder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Update Messages",
					"value": "Users Mail Folders Child Folders Update Messages",
					"action": "Update the navigation property messages in users",
					"description": "Update the navigation property messages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Get Messages Content",
					"value": "Users Mail Folders Child Folders Get Messages Content",
					"action": "Get media content for the navigation property messages from users",
					"description": "Get media content for the navigation property messages from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Update Messages Content",
					"value": "Users Mail Folders Child Folders Update Messages Content",
					"action": "Update media content for the navigation property messages in users",
					"description": "Update media content for the navigation property messages in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages List Attachments",
					"value": "Users Mail Folders Child Folders Messages List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Create Attachments",
					"value": "Users Mail Folders Child Folders Messages Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource.  You can add an attachment to an existing message by posting to its attachments collection, or to a new \nmessage that is being drafted, or created and sent on the fly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Delete Attachments",
					"value": "Users Mail Folders Child Folders Messages Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Get Attachments",
					"value": "Users Mail Folders Child Folders Messages Get Attachments",
					"action": "Get attachments from users",
					"description": "The fileAttachment and itemAttachment attachments for the message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages List Extensions",
					"value": "Users Mail Folders Child Folders Messages List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Create Extensions",
					"value": "Users Mail Folders Child Folders Messages Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Delete Extensions",
					"value": "Users Mail Folders Child Folders Messages Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Get Extensions",
					"value": "Users Mail Folders Child Folders Messages Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Update Extensions",
					"value": "Users Mail Folders Child Folders Messages Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages List Mentions",
					"value": "Users Mail Folders Child Folders Messages List Mentions",
					"action": "Get mentions from users",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Create Mentions",
					"value": "Users Mail Folders Child Folders Messages Create Mentions",
					"action": "Create new navigation property to mentions for users",
					"description": "Create new navigation property to mentions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Delete Mentions",
					"value": "Users Mail Folders Child Folders Messages Delete Mentions",
					"action": "Delete navigation property mentions for users",
					"description": "Delete navigation property mentions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Get Mentions",
					"value": "Users Mail Folders Child Folders Messages Get Mentions",
					"action": "Get mentions from users",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages List Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Create Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Delete Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Get Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Update Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages List Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Create Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Delete Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Get Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Messages Update Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Messages Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders List Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Create Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Delete Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Get Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Update Multi Value Extended Properties",
					"value": "Users Mail Folders Child Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders List Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Create Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Delete Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Get Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Update Single Value Extended Properties",
					"value": "Users Mail Folders Child Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders List User Configurations",
					"value": "Users Mail Folders Child Folders List User Configurations",
					"action": "Get userConfigurations from users",
					"description": "Get userConfigurations from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/userConfigurations"
						}
					}
				},
				{
					"name": "Users Mail Folders Child Folders Get User Configurations",
					"value": "Users Mail Folders Child Folders Get User Configurations",
					"action": "Get userConfigurations from users",
					"description": "Get userConfigurations from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/userConfigurations/{{$parameter[\"userConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders List Message Rules",
					"value": "Users Mail Folders List Message Rules",
					"action": "Get messageRules from users",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Users Mail Folders Create Message Rules",
					"value": "Users Mail Folders Create Message Rules",
					"action": "Create new navigation property to messageRules for users",
					"description": "Create new navigation property to messageRules for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Users Mail Folders Delete Message Rules",
					"value": "Users Mail Folders Delete Message Rules",
					"action": "Delete navigation property messageRules for users",
					"description": "Delete navigation property messageRules for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Get Message Rules",
					"value": "Users Mail Folders Get Message Rules",
					"action": "Get messageRules from users",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Update Message Rules",
					"value": "Users Mail Folders Update Message Rules",
					"action": "Update the navigation property messageRules in users",
					"description": "Update the navigation property messageRules in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders List Messages",
					"value": "Users Mail Folders List Messages",
					"action": "List messages",
					"description": "List all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Users Mail Folders Create Messages",
					"value": "Users Mail Folders Create Messages",
					"action": "Create Message",
					"description": "Use this API to create a new Message in a mailfolder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Users Mail Folders Delete Messages",
					"value": "Users Mail Folders Delete Messages",
					"action": "Delete navigation property messages for users",
					"description": "Delete navigation property messages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Get Messages",
					"value": "Users Mail Folders Get Messages",
					"action": "Get messages from users",
					"description": "The collection of messages in the mailFolder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Update Messages",
					"value": "Users Mail Folders Update Messages",
					"action": "Update the navigation property messages in users",
					"description": "Update the navigation property messages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Get Messages Content",
					"value": "Users Mail Folders Get Messages Content",
					"action": "Get media content for the navigation property messages from users",
					"description": "Get media content for the navigation property messages from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Mail Folders Update Messages Content",
					"value": "Users Mail Folders Update Messages Content",
					"action": "Update media content for the navigation property messages in users",
					"description": "Update media content for the navigation property messages in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages List Attachments",
					"value": "Users Mail Folders Messages List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Create Attachments",
					"value": "Users Mail Folders Messages Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource.  You can add an attachment to an existing message by posting to its attachments collection, or to a new \nmessage that is being drafted, or created and sent on the fly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Delete Attachments",
					"value": "Users Mail Folders Messages Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Get Attachments",
					"value": "Users Mail Folders Messages Get Attachments",
					"action": "Get attachments from users",
					"description": "The fileAttachment and itemAttachment attachments for the message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages List Extensions",
					"value": "Users Mail Folders Messages List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Create Extensions",
					"value": "Users Mail Folders Messages Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Delete Extensions",
					"value": "Users Mail Folders Messages Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Get Extensions",
					"value": "Users Mail Folders Messages Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Update Extensions",
					"value": "Users Mail Folders Messages Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages List Mentions",
					"value": "Users Mail Folders Messages List Mentions",
					"action": "Get mentions from users",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Create Mentions",
					"value": "Users Mail Folders Messages Create Mentions",
					"action": "Create new navigation property to mentions for users",
					"description": "Create new navigation property to mentions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Delete Mentions",
					"value": "Users Mail Folders Messages Delete Mentions",
					"action": "Delete navigation property mentions for users",
					"description": "Delete navigation property mentions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Get Mentions",
					"value": "Users Mail Folders Messages Get Mentions",
					"action": "Get mentions from users",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages List Multi Value Extended Properties",
					"value": "Users Mail Folders Messages List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Create Multi Value Extended Properties",
					"value": "Users Mail Folders Messages Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Delete Multi Value Extended Properties",
					"value": "Users Mail Folders Messages Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Get Multi Value Extended Properties",
					"value": "Users Mail Folders Messages Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Update Multi Value Extended Properties",
					"value": "Users Mail Folders Messages Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages List Single Value Extended Properties",
					"value": "Users Mail Folders Messages List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Create Single Value Extended Properties",
					"value": "Users Mail Folders Messages Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Delete Single Value Extended Properties",
					"value": "Users Mail Folders Messages Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Get Single Value Extended Properties",
					"value": "Users Mail Folders Messages Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Messages Update Single Value Extended Properties",
					"value": "Users Mail Folders Messages Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders List Multi Value Extended Properties",
					"value": "Users Mail Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Create Multi Value Extended Properties",
					"value": "Users Mail Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Delete Multi Value Extended Properties",
					"value": "Users Mail Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Get Multi Value Extended Properties",
					"value": "Users Mail Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Update Multi Value Extended Properties",
					"value": "Users Mail Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders List Single Value Extended Properties",
					"value": "Users Mail Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Create Single Value Extended Properties",
					"value": "Users Mail Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Mail Folders Delete Single Value Extended Properties",
					"value": "Users Mail Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Get Single Value Extended Properties",
					"value": "Users Mail Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders Update Single Value Extended Properties",
					"value": "Users Mail Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mail Folders List User Configurations",
					"value": "Users Mail Folders List User Configurations",
					"action": "Get userConfigurations from users",
					"description": "Get userConfigurations from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/userConfigurations"
						}
					}
				},
				{
					"name": "Users Mail Folders Get User Configurations",
					"value": "Users Mail Folders Get User Configurations",
					"action": "Get userConfigurations from users",
					"description": "Get userConfigurations from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mailFolders/{{$parameter[\"mailFolder-id\"]}}/userConfigurations/{{$parameter[\"userConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users List Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Create Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Create Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Delete Mail Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Delete Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Get Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Get Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Update Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Update Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Child Folders"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Child Folders Get User Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messageRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Message Rules"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Messages"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Attachments"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Extensions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Mentions"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Multi Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Single Value Extended Properties"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
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
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mail Folder"
					],
					"operation": [
						"Users Mail Folders Get User Configurations"
					]
				}
			}
		},
];
