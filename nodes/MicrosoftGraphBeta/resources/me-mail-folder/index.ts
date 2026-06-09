import type { INodeProperties } from 'n8n-workflow';

export const meMailFolderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					]
				}
			},
			"options": [
				{
					"name": "Me List Mail Folders",
					"value": "Me List Mail Folders",
					"action": "List mailFolders",
					"description": "Get all the mail folders in the specified user's mailbox, including any mail search folders. By default, this operation does not return hidden folders. Use a query parameter _includeHiddenFolders_ to include them in the response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders"
						}
					}
				},
				{
					"name": "Me Create Mail Folders",
					"value": "Me Create Mail Folders",
					"action": "Create MailFolder",
					"description": "Use this API to create a new mail folder in the root folder of the user's mailbox. If you intend a new folder to be hidden, you must set the **isHidden** property to `true` on creation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders"
						}
					}
				},
				{
					"name": "Me Delete Mail Folders",
					"value": "Me Delete Mail Folders",
					"action": "Delete navigation property mailFolders for me",
					"description": "Delete navigation property mailFolders for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Mail Folders",
					"value": "Me Get Mail Folders",
					"action": "Get mailFolders from me",
					"description": "The user's mail folders. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Mail Folders",
					"value": "Me Update Mail Folders",
					"action": "Update the navigation property mailFolders in me",
					"description": "Update the navigation property mailFolders in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders List Child Folders",
					"value": "Me Mail Folders List Child Folders",
					"action": "List childFolders",
					"description": "Get the folder collection under the specified folder. You can use the `.../me/mailFolders` shortcut to get the top-level\nfolder collection and navigate to another folder. By default, this operation does not return hidden folders. Use a query parameter _includeHiddenFolders_ to include them in the response.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Me Mail Folders Create Child Folders",
					"value": "Me Mail Folders Create Child Folders",
					"action": "Create child folder",
					"description": "Use this API to create a new child mailFolder. If you intend a new folder to be hidden, you must set the **isHidden** property to `true` on creation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Me Mail Folders Delete Child Folders",
					"value": "Me Mail Folders Delete Child Folders",
					"action": "Delete navigation property childFolders for me",
					"description": "Delete navigation property childFolders for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Get Child Folders",
					"value": "Me Mail Folders Get Child Folders",
					"action": "Get childFolders from me",
					"description": "The collection of child folders in the mailFolder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Update Child Folders",
					"value": "Me Mail Folders Update Child Folders",
					"action": "Update the navigation property childFolders in me",
					"description": "Update the navigation property childFolders in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders List Message Rules",
					"value": "Me Mail Folders Child Folders List Message Rules",
					"action": "Get messageRules from me",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Create Message Rules",
					"value": "Me Mail Folders Child Folders Create Message Rules",
					"action": "Create new navigation property to messageRules for me",
					"description": "Create new navigation property to messageRules for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Delete Message Rules",
					"value": "Me Mail Folders Child Folders Delete Message Rules",
					"action": "Delete navigation property messageRules for me",
					"description": "Delete navigation property messageRules for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Get Message Rules",
					"value": "Me Mail Folders Child Folders Get Message Rules",
					"action": "Get messageRules from me",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Update Message Rules",
					"value": "Me Mail Folders Child Folders Update Message Rules",
					"action": "Update the navigation property messageRules in me",
					"description": "Update the navigation property messageRules in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders List Messages",
					"value": "Me Mail Folders Child Folders List Messages",
					"action": "List messages",
					"description": "List all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Create Messages",
					"value": "Me Mail Folders Child Folders Create Messages",
					"action": "Create Message",
					"description": "Use this API to create a new Message in a mailfolder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Delete Messages",
					"value": "Me Mail Folders Child Folders Delete Messages",
					"action": "Delete navigation property messages for me",
					"description": "Delete navigation property messages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Get Messages",
					"value": "Me Mail Folders Child Folders Get Messages",
					"action": "Get messages from me",
					"description": "The collection of messages in the mailFolder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Update Messages",
					"value": "Me Mail Folders Child Folders Update Messages",
					"action": "Update the navigation property messages in me",
					"description": "Update the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Get Messages Content",
					"value": "Me Mail Folders Child Folders Get Messages Content",
					"action": "Get media content for the navigation property messages from me",
					"description": "Get media content for the navigation property messages from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Update Messages Content",
					"value": "Me Mail Folders Child Folders Update Messages Content",
					"action": "Update media content for the navigation property messages in me",
					"description": "Update media content for the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages List Attachments",
					"value": "Me Mail Folders Child Folders Messages List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Create Attachments",
					"value": "Me Mail Folders Child Folders Messages Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource.  You can add an attachment to an existing message by posting to its attachments collection, or to a new \nmessage that is being drafted, or created and sent on the fly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Delete Attachments",
					"value": "Me Mail Folders Child Folders Messages Delete Attachments",
					"action": "Delete navigation property attachments for me",
					"description": "Delete navigation property attachments for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Get Attachments",
					"value": "Me Mail Folders Child Folders Messages Get Attachments",
					"action": "Get attachments from me",
					"description": "The fileAttachment and itemAttachment attachments for the message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages List Extensions",
					"value": "Me Mail Folders Child Folders Messages List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Create Extensions",
					"value": "Me Mail Folders Child Folders Messages Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Delete Extensions",
					"value": "Me Mail Folders Child Folders Messages Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Get Extensions",
					"value": "Me Mail Folders Child Folders Messages Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Update Extensions",
					"value": "Me Mail Folders Child Folders Messages Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages List Mentions",
					"value": "Me Mail Folders Child Folders Messages List Mentions",
					"action": "Get mentions from me",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Create Mentions",
					"value": "Me Mail Folders Child Folders Messages Create Mentions",
					"action": "Create new navigation property to mentions for me",
					"description": "Create new navigation property to mentions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Delete Mentions",
					"value": "Me Mail Folders Child Folders Messages Delete Mentions",
					"action": "Delete navigation property mentions for me",
					"description": "Delete navigation property mentions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Get Mentions",
					"value": "Me Mail Folders Child Folders Messages Get Mentions",
					"action": "Get mentions from me",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages List Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Create Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Delete Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Get Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Update Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages List Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Create Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Delete Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Get Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Messages Update Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Messages Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders List Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Create Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Delete Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Get Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Update Multi Value Extended Properties",
					"value": "Me Mail Folders Child Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders List Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Create Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Delete Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Get Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Update Single Value Extended Properties",
					"value": "Me Mail Folders Child Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders List User Configurations",
					"value": "Me Mail Folders Child Folders List User Configurations",
					"action": "Get userConfigurations from me",
					"description": "Get userConfigurations from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/userConfigurations"
						}
					}
				},
				{
					"name": "Me Mail Folders Child Folders Get User Configurations",
					"value": "Me Mail Folders Child Folders Get User Configurations",
					"action": "Get userConfigurations from me",
					"description": "Get userConfigurations from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/userConfigurations/{{$parameter[\"userConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders List Message Rules",
					"value": "Me Mail Folders List Message Rules",
					"action": "Get messageRules from me",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Me Mail Folders Create Message Rules",
					"value": "Me Mail Folders Create Message Rules",
					"action": "Create new navigation property to messageRules for me",
					"description": "Create new navigation property to messageRules for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules"
						}
					}
				},
				{
					"name": "Me Mail Folders Delete Message Rules",
					"value": "Me Mail Folders Delete Message Rules",
					"action": "Delete navigation property messageRules for me",
					"description": "Delete navigation property messageRules for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Get Message Rules",
					"value": "Me Mail Folders Get Message Rules",
					"action": "Get messageRules from me",
					"description": "The collection of rules that apply to the user's Inbox folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Update Message Rules",
					"value": "Me Mail Folders Update Message Rules",
					"action": "Update the navigation property messageRules in me",
					"description": "Update the navigation property messageRules in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messageRules/{{$parameter[\"messageRule-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders List Messages",
					"value": "Me Mail Folders List Messages",
					"action": "List messages",
					"description": "List all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Me Mail Folders Create Messages",
					"value": "Me Mail Folders Create Messages",
					"action": "Create Message",
					"description": "Use this API to create a new Message in a mailfolder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Me Mail Folders Delete Messages",
					"value": "Me Mail Folders Delete Messages",
					"action": "Delete navigation property messages for me",
					"description": "Delete navigation property messages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Get Messages",
					"value": "Me Mail Folders Get Messages",
					"action": "Get messages from me",
					"description": "The collection of messages in the mailFolder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Update Messages",
					"value": "Me Mail Folders Update Messages",
					"action": "Update the navigation property messages in me",
					"description": "Update the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Get Messages Content",
					"value": "Me Mail Folders Get Messages Content",
					"action": "Get media content for the navigation property messages from me",
					"description": "Get media content for the navigation property messages from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Mail Folders Update Messages Content",
					"value": "Me Mail Folders Update Messages Content",
					"action": "Update media content for the navigation property messages in me",
					"description": "Update media content for the navigation property messages in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages List Attachments",
					"value": "Me Mail Folders Messages List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to a message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Create Attachments",
					"value": "Me Mail Folders Messages Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to a message.  An attachment can be one of the following types: All these types of attachment resources are derived from the attachment\nresource.  You can add an attachment to an existing message by posting to its attachments collection, or to a new \nmessage that is being drafted, or created and sent on the fly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Delete Attachments",
					"value": "Me Mail Folders Messages Delete Attachments",
					"action": "Delete navigation property attachments for me",
					"description": "Delete navigation property attachments for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Get Attachments",
					"value": "Me Mail Folders Messages Get Attachments",
					"action": "Get attachments from me",
					"description": "The fileAttachment and itemAttachment attachments for the message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages List Extensions",
					"value": "Me Mail Folders Messages List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Create Extensions",
					"value": "Me Mail Folders Messages Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Delete Extensions",
					"value": "Me Mail Folders Messages Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Get Extensions",
					"value": "Me Mail Folders Messages Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Update Extensions",
					"value": "Me Mail Folders Messages Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages List Mentions",
					"value": "Me Mail Folders Messages List Mentions",
					"action": "Get mentions from me",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Create Mentions",
					"value": "Me Mail Folders Messages Create Mentions",
					"action": "Create new navigation property to mentions for me",
					"description": "Create new navigation property to mentions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Delete Mentions",
					"value": "Me Mail Folders Messages Delete Mentions",
					"action": "Delete navigation property mentions for me",
					"description": "Delete navigation property mentions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Get Mentions",
					"value": "Me Mail Folders Messages Get Mentions",
					"action": "Get mentions from me",
					"description": "A collection of mentions in the message, ordered by the createdDateTime from the newest to the oldest. By default, a GET /messages does not return this property unless you apply $expand on the property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/mentions/{{$parameter[\"mention-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages List Multi Value Extended Properties",
					"value": "Me Mail Folders Messages List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Create Multi Value Extended Properties",
					"value": "Me Mail Folders Messages Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Delete Multi Value Extended Properties",
					"value": "Me Mail Folders Messages Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Get Multi Value Extended Properties",
					"value": "Me Mail Folders Messages Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Update Multi Value Extended Properties",
					"value": "Me Mail Folders Messages Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages List Single Value Extended Properties",
					"value": "Me Mail Folders Messages List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Create Single Value Extended Properties",
					"value": "Me Mail Folders Messages Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Delete Single Value Extended Properties",
					"value": "Me Mail Folders Messages Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Get Single Value Extended Properties",
					"value": "Me Mail Folders Messages Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the message. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Messages Update Single Value Extended Properties",
					"value": "Me Mail Folders Messages Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/{{$parameter[\"message-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders List Multi Value Extended Properties",
					"value": "Me Mail Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Create Multi Value Extended Properties",
					"value": "Me Mail Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Delete Multi Value Extended Properties",
					"value": "Me Mail Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Get Multi Value Extended Properties",
					"value": "Me Mail Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Update Multi Value Extended Properties",
					"value": "Me Mail Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders List Single Value Extended Properties",
					"value": "Me Mail Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Create Single Value Extended Properties",
					"value": "Me Mail Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Mail Folders Delete Single Value Extended Properties",
					"value": "Me Mail Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Get Single Value Extended Properties",
					"value": "Me Mail Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the mailFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders Update Single Value Extended Properties",
					"value": "Me Mail Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mail Folders List User Configurations",
					"value": "Me Mail Folders List User Configurations",
					"action": "Get userConfigurations from me",
					"description": "Get userConfigurations from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/userConfigurations"
						}
					}
				},
				{
					"name": "Me Mail Folders Get User Configurations",
					"value": "Me Mail Folders Get User Configurations",
					"action": "Get userConfigurations from me",
					"description": "Get userConfigurations from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/userConfigurations/{{$parameter[\"userConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/mailFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me List Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Create Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Create Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Delete Mail Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Delete Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Get Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Get Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Update Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Update Mail Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Child Folders"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/userConfigurations/{userConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Child Folders Get User Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messageRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messageRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Message Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Message Rules"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messageRules/{messageRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Message Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Messages"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/mailFolders/{mailFolder-id}/messages/{message-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/mailFolders/{mailFolder-id}/messages/{message-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Messages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Attachments"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Extensions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Mentions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Mentions"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/mentions/{mention-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Mentions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/messages/{message-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Messages Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Multi Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Single Value Extended Properties"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mailFolders/{mailFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/userConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
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
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders List User Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/userConfigurations/{userConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get User Configurations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mail Folder"
					],
					"operation": [
						"Me Mail Folders Get User Configurations"
					]
				}
			}
		},
];
