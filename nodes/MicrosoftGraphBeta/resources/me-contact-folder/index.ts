import type { INodeProperties } from 'n8n-workflow';

export const meContactFolderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					]
				}
			},
			"options": [
				{
					"name": "Me List Contact Folders",
					"value": "Me List Contact Folders",
					"action": "List contactFolders",
					"description": "Get all the contact folders in the signed-in user's mailbox.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders"
						}
					}
				},
				{
					"name": "Me Create Contact Folders",
					"value": "Me Create Contact Folders",
					"action": "Create ContactFolder",
					"description": "Create a new contactFolder under the user's default contacts folder. You can also create a new contactfolder as a child of any specified contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders"
						}
					}
				},
				{
					"name": "Me Delete Contact Folders",
					"value": "Me Delete Contact Folders",
					"action": "Delete navigation property contactFolders for me",
					"description": "Delete navigation property contactFolders for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Contact Folders",
					"value": "Me Get Contact Folders",
					"action": "Get contactFolders from me",
					"description": "The user's contacts folders. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Contact Folders",
					"value": "Me Update Contact Folders",
					"action": "Update the navigation property contactFolders in me",
					"description": "Update the navigation property contactFolders in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders List Child Folders",
					"value": "Me Contact Folders List Child Folders",
					"action": "List childFolders",
					"description": "Get a collection of child folders under the specified contact folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Me Contact Folders Create Child Folders",
					"value": "Me Contact Folders Create Child Folders",
					"action": "Create ContactFolder",
					"description": "Create a new contactFolder as a child of a specified folder.  You can also create a new contactFolder under the user's default contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders"
						}
					}
				},
				{
					"name": "Me Contact Folders Delete Child Folders",
					"value": "Me Contact Folders Delete Child Folders",
					"action": "Delete navigation property childFolders for me",
					"description": "Delete navigation property childFolders for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Get Child Folders",
					"value": "Me Contact Folders Get Child Folders",
					"action": "Get childFolders from me",
					"description": "The collection of child folders in the folder. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Update Child Folders",
					"value": "Me Contact Folders Update Child Folders",
					"action": "Update the navigation property childFolders in me",
					"description": "Update the navigation property childFolders in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders List Contacts",
					"value": "Me Contact Folders Child Folders List Contacts",
					"action": "List contacts",
					"description": "Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Create Contacts",
					"value": "Me Contact Folders Child Folders Create Contacts",
					"action": "Create Contact",
					"description": "Add a contact to the root Contacts folder or to the `contacts` endpoint of another contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Delete Contacts",
					"value": "Me Contact Folders Child Folders Delete Contacts",
					"action": "Delete navigation property contacts for me",
					"description": "Delete navigation property contacts for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Get Contacts",
					"value": "Me Contact Folders Child Folders Get Contacts",
					"action": "Get contacts from me",
					"description": "The contacts in the folder. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Update Contacts",
					"value": "Me Contact Folders Child Folders Update Contacts",
					"action": "Update the navigation property contacts in me",
					"description": "Update the navigation property contacts in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts List Extensions",
					"value": "Me Contact Folders Child Folders Contacts List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Create Extensions",
					"value": "Me Contact Folders Child Folders Contacts Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Delete Extensions",
					"value": "Me Contact Folders Child Folders Contacts Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Get Extensions",
					"value": "Me Contact Folders Child Folders Contacts Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Update Extensions",
					"value": "Me Contact Folders Child Folders Contacts Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts List Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Create Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Delete Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Get Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Update Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Get Photo",
					"value": "Me Contact Folders Child Folders Contacts Get Photo",
					"action": "Get photo from me",
					"description": "Optional contact picture. You can get or set a photo for a contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Update Photo",
					"value": "Me Contact Folders Child Folders Contacts Update Photo",
					"action": "Update the navigation property photo in me",
					"description": "Update the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Get Photo Content",
					"value": "Me Contact Folders Child Folders Contacts Get Photo Content",
					"action": "Get media content for the navigation property photo from me",
					"description": "Get media content for the navigation property photo from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Update Photo Content",
					"value": "Me Contact Folders Child Folders Contacts Update Photo Content",
					"action": "Update media content for the navigation property photo in me",
					"description": "Update media content for the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts List Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Create Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Delete Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Get Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Contacts Update Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Contacts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders List Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Create Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Delete Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Get Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Update Multi Value Extended Properties",
					"value": "Me Contact Folders Child Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders List Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Create Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Delete Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Get Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Child Folders Update Single Value Extended Properties",
					"value": "Me Contact Folders Child Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders List Contacts",
					"value": "Me Contact Folders List Contacts",
					"action": "List contacts",
					"description": "Get all the contacts in the signed-in user's mailbox (.../me/contacts), or from the specified contact folder.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Me Contact Folders Create Contacts",
					"value": "Me Contact Folders Create Contacts",
					"action": "Create Contact",
					"description": "Add a contact to the root Contacts folder or to the `contacts` endpoint of another contact folder.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts"
						}
					}
				},
				{
					"name": "Me Contact Folders Delete Contacts",
					"value": "Me Contact Folders Delete Contacts",
					"action": "Delete navigation property contacts for me",
					"description": "Delete navigation property contacts for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Get Contacts",
					"value": "Me Contact Folders Get Contacts",
					"action": "Get contacts from me",
					"description": "The contacts in the folder. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Update Contacts",
					"value": "Me Contact Folders Update Contacts",
					"action": "Update the navigation property contacts in me",
					"description": "Update the navigation property contacts in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts List Extensions",
					"value": "Me Contact Folders Contacts List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Create Extensions",
					"value": "Me Contact Folders Contacts Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Delete Extensions",
					"value": "Me Contact Folders Contacts Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Get Extensions",
					"value": "Me Contact Folders Contacts Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the contact. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Update Extensions",
					"value": "Me Contact Folders Contacts Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts List Multi Value Extended Properties",
					"value": "Me Contact Folders Contacts List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Create Multi Value Extended Properties",
					"value": "Me Contact Folders Contacts Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Delete Multi Value Extended Properties",
					"value": "Me Contact Folders Contacts Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Get Multi Value Extended Properties",
					"value": "Me Contact Folders Contacts Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Update Multi Value Extended Properties",
					"value": "Me Contact Folders Contacts Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Get Photo",
					"value": "Me Contact Folders Contacts Get Photo",
					"action": "Get photo from me",
					"description": "Optional contact picture. You can get or set a photo for a contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Update Photo",
					"value": "Me Contact Folders Contacts Update Photo",
					"action": "Update the navigation property photo in me",
					"description": "Update the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Get Photo Content",
					"value": "Me Contact Folders Contacts Get Photo Content",
					"action": "Get media content for the navigation property photo from me",
					"description": "Get media content for the navigation property photo from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Update Photo Content",
					"value": "Me Contact Folders Contacts Update Photo Content",
					"action": "Update media content for the navigation property photo in me",
					"description": "Update media content for the navigation property photo in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/photo/$value"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts List Single Value Extended Properties",
					"value": "Me Contact Folders Contacts List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Create Single Value Extended Properties",
					"value": "Me Contact Folders Contacts Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Delete Single Value Extended Properties",
					"value": "Me Contact Folders Contacts Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Get Single Value Extended Properties",
					"value": "Me Contact Folders Contacts Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contact. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Contacts Update Single Value Extended Properties",
					"value": "Me Contact Folders Contacts Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/{{$parameter[\"contact-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders List Multi Value Extended Properties",
					"value": "Me Contact Folders List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Create Multi Value Extended Properties",
					"value": "Me Contact Folders Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for me",
					"description": "Create new navigation property to multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Delete Multi Value Extended Properties",
					"value": "Me Contact Folders Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for me",
					"description": "Delete navigation property multiValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Get Multi Value Extended Properties",
					"value": "Me Contact Folders Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from me",
					"description": "The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Update Multi Value Extended Properties",
					"value": "Me Contact Folders Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in me",
					"description": "Update the navigation property multiValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders List Single Value Extended Properties",
					"value": "Me Contact Folders List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Create Single Value Extended Properties",
					"value": "Me Contact Folders Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for me",
					"description": "Create new navigation property to singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Me Contact Folders Delete Single Value Extended Properties",
					"value": "Me Contact Folders Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for me",
					"description": "Delete navigation property singleValueExtendedProperties for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Get Single Value Extended Properties",
					"value": "Me Contact Folders Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from me",
					"description": "The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Me Contact Folders Update Single Value Extended Properties",
					"value": "Me Contact Folders Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in me",
					"description": "Update the navigation property singleValueExtendedProperties in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/contactFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me List Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Create Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Create Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Delete Contact Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Delete Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Get Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Get Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Update Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Update Contact Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Child Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Child Folders"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Child Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Delete Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Delete Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Delete Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Delete Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Delete Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Delete Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Delete Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Child Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Contacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Contacts"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Contacts"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Delete Extensions"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Delete Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Photo"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/photo/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Photo Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Delete Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/contacts/{contact-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Contacts Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Multi Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Single Value Extended Properties"
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
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/contactFolders/{contactFolder-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Contact Folder"
					],
					"operation": [
						"Me Contact Folders Update Single Value Extended Properties"
					]
				}
			}
		},
];
