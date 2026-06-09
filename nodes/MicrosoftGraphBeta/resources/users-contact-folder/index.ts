import type { INodeProperties } from 'n8n-workflow';

export const usersContactFolderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					]
				}
			},
			"options": [
				{
					"name": "Users List Contact Folders",
					"value": "Users List Contact Folders",
					"action": "List contactFolders",
					"description": "Get all the contact folders in the signed-in user's mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders"
						}
					}
				},
				{
					"name": "Users Create Contact Folders",
					"value": "Users Create Contact Folders",
					"action": "Create ContactFolder",
					"description": "Create a new contactFolder under the user's default contacts folder. You can also create a new contactfolder as a child of any specified contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders"
						}
					}
				},
				{
					"name": "Users Delete Contact Folders",
					"value": "Users Delete Contact Folders",
					"action": "Delete navigation property contactFolders for users",
					"description": "Delete navigation property contactFolders for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Contact Folders",
					"value": "Users Get Contact Folders",
					"action": "Get contactFolders from users",
					"description": "The user's contacts folders. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Contact Folders",
					"value": "Users Update Contact Folders",
					"action": "Update the navigation property contactFolders in users",
					"description": "Update the navigation property contactFolders in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders List Child Folders",
					"value": "Users Contact Folders List Child Folders",
					"action": "List childFolders",
					"description": "Get a collection of child folders under the specified contact folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Users Contact Folders Create Child Folders",
					"value": "Users Contact Folders Create Child Folders",
					"action": "Create ContactFolder",
					"description": "Create a new contactFolder as a child of a specified folder.  You can also create a new contactFolder under the user's default contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Users Contact Folders Delete Child Folders",
					"value": "Users Contact Folders Delete Child Folders",
					"action": "Delete navigation property childFolders for users",
					"description": "Delete navigation property childFolders for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Get Child Folders",
					"value": "Users Contact Folders Get Child Folders",
					"action": "Get childFolders from users",
					"description": "The collection of child folders in the folder. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Update Child Folders",
					"value": "Users Contact Folders Update Child Folders",
					"action": "Update the navigation property childFolders in users",
					"description": "Update the navigation property childFolders in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders List Contacts",
					"value": "Users Contact Folders Child Folders List Contacts",
					"action": "List contacts",
					"description": "Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Create Contacts",
					"value": "Users Contact Folders Child Folders Create Contacts",
					"action": "Create Contact",
					"description": "Add a contact to the root Contacts folder or to the `contacts` endpoint of another contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Delete Contacts",
					"value": "Users Contact Folders Child Folders Delete Contacts",
					"action": "Delete navigation property contacts for users",
					"description": "Delete navigation property contacts for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Get Contacts",
					"value": "Users Contact Folders Child Folders Get Contacts",
					"action": "Get contacts from users",
					"description": "The contacts in the folder. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Update Contacts",
					"value": "Users Contact Folders Child Folders Update Contacts",
					"action": "Update the navigation property contacts in users",
					"description": "Update the navigation property contacts in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts List Extensions",
					"value": "Users Contact Folders Child Folders Contacts List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Create Extensions",
					"value": "Users Contact Folders Child Folders Contacts Create Extensions",
					"action": "Create new navigation property to extensions for users",
					"description": "Create new navigation property to extensions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Delete Extensions",
					"value": "Users Contact Folders Child Folders Contacts Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Get Extensions",
					"value": "Users Contact Folders Child Folders Contacts Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Update Extensions",
					"value": "Users Contact Folders Child Folders Contacts Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts List Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Create Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Delete Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Get Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Update Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Get Photo",
					"value": "Users Contact Folders Child Folders Contacts Get Photo",
					"action": "Get photo from users",
					"description": "Optional contact picture. You can get or set a photo for a contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Update Photo",
					"value": "Users Contact Folders Child Folders Contacts Update Photo",
					"action": "Update the navigation property photo in users",
					"description": "Update the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Get Photo Content",
					"value": "Users Contact Folders Child Folders Contacts Get Photo Content",
					"action": "Get media content for the navigation property photo from users",
					"description": "Get media content for the navigation property photo from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Update Photo Content",
					"value": "Users Contact Folders Child Folders Contacts Update Photo Content",
					"action": "Update media content for the navigation property photo in users",
					"description": "Update media content for the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts List Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Create Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Delete Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Get Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Contacts Update Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Contacts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders List Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Create Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Delete Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Get Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Update Multi Value Extended Properties",
					"value": "Users Contact Folders Child Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders List Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Create Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Delete Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Get Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Child Folders Update Single Value Extended Properties",
					"value": "Users Contact Folders Child Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders List Contacts",
					"value": "Users Contact Folders List Contacts",
					"action": "List contacts",
					"description": "Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Users Contact Folders Create Contacts",
					"value": "Users Contact Folders Create Contacts",
					"action": "Create Contact",
					"description": "Add a contact to the root Contacts folder or to the `contacts` endpoint of another contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Users Contact Folders Delete Contacts",
					"value": "Users Contact Folders Delete Contacts",
					"action": "Delete navigation property contacts for users",
					"description": "Delete navigation property contacts for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Get Contacts",
					"value": "Users Contact Folders Get Contacts",
					"action": "Get contacts from users",
					"description": "The contacts in the folder. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Update Contacts",
					"value": "Users Contact Folders Update Contacts",
					"action": "Update the navigation property contacts in users",
					"description": "Update the navigation property contacts in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts List Extensions",
					"value": "Users Contact Folders Contacts List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Create Extensions",
					"value": "Users Contact Folders Contacts Create Extensions",
					"action": "Create new navigation property to extensions for users",
					"description": "Create new navigation property to extensions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Delete Extensions",
					"value": "Users Contact Folders Contacts Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Get Extensions",
					"value": "Users Contact Folders Contacts Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Update Extensions",
					"value": "Users Contact Folders Contacts Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts List Multi Value Extended Properties",
					"value": "Users Contact Folders Contacts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Create Multi Value Extended Properties",
					"value": "Users Contact Folders Contacts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Delete Multi Value Extended Properties",
					"value": "Users Contact Folders Contacts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Get Multi Value Extended Properties",
					"value": "Users Contact Folders Contacts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Update Multi Value Extended Properties",
					"value": "Users Contact Folders Contacts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Get Photo",
					"value": "Users Contact Folders Contacts Get Photo",
					"action": "Get photo from users",
					"description": "Optional contact picture. You can get or set a photo for a contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Update Photo",
					"value": "Users Contact Folders Contacts Update Photo",
					"action": "Update the navigation property photo in users",
					"description": "Update the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Get Photo Content",
					"value": "Users Contact Folders Contacts Get Photo Content",
					"action": "Get media content for the navigation property photo from users",
					"description": "Get media content for the navigation property photo from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Update Photo Content",
					"value": "Users Contact Folders Contacts Update Photo Content",
					"action": "Update media content for the navigation property photo in users",
					"description": "Update media content for the navigation property photo in users",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts List Single Value Extended Properties",
					"value": "Users Contact Folders Contacts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Create Single Value Extended Properties",
					"value": "Users Contact Folders Contacts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Delete Single Value Extended Properties",
					"value": "Users Contact Folders Contacts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Get Single Value Extended Properties",
					"value": "Users Contact Folders Contacts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Contacts Update Single Value Extended Properties",
					"value": "Users Contact Folders Contacts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders List Multi Value Extended Properties",
					"value": "Users Contact Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Create Multi Value Extended Properties",
					"value": "Users Contact Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Delete Multi Value Extended Properties",
					"value": "Users Contact Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Get Multi Value Extended Properties",
					"value": "Users Contact Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Update Multi Value Extended Properties",
					"value": "Users Contact Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders List Single Value Extended Properties",
					"value": "Users Contact Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Create Single Value Extended Properties",
					"value": "Users Contact Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Contact Folders Delete Single Value Extended Properties",
					"value": "Users Contact Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Get Single Value Extended Properties",
					"value": "Users Contact Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Contact Folders Update Single Value Extended Properties",
					"value": "Users Contact Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users List Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Create Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Create Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Delete Contact Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Delete Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Get Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Get Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Update Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Update Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Child Folders"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Delete Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Delete Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Delete Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Delete Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Delete Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Delete Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Delete Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Contacts"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Delete Extensions"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Delete Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Delete Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Multi Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Single Value Extended Properties"
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
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Contact Folder"
					],
					"operation": [
						"Users Contact Folders Update Single Value Extended Properties"
					]
				}
			}
		},
];
