import type { INodeProperties } from 'n8n-workflow';

export const usersEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					]
				}
			},
			"options": [
				{
					"name": "Users List Calendar View",
					"value": "Users List Calendar View",
					"action": "Get calendarView from users",
					"description": "The calendar view for the calendar. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView"
						}
					}
				},
				{
					"name": "Users Get Calendar View",
					"value": "Users Get Calendar View",
					"action": "Get calendarView from users",
					"description": "The calendar view for the calendar. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View List Attachments",
					"value": "Users Calendar View List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Create Attachments",
					"value": "Users Calendar View Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Delete Attachments",
					"value": "Users Calendar View Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Get Attachments",
					"value": "Users Calendar View Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Get Calendar",
					"value": "Users Calendar View Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Calendar View List Exception Occurrences",
					"value": "Users Calendar View List Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Users Calendar View Get Exception Occurrences",
					"value": "Users Calendar View Get Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences List Attachments",
					"value": "Users Calendar View Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Create Attachments",
					"value": "Users Calendar View Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Delete Attachments",
					"value": "Users Calendar View Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Get Attachments",
					"value": "Users Calendar View Exception Occurrences Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Get Calendar",
					"value": "Users Calendar View Exception Occurrences Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences List Extensions",
					"value": "Users Calendar View Exception Occurrences List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Create Extensions",
					"value": "Users Calendar View Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Delete Extensions",
					"value": "Users Calendar View Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Get Extensions",
					"value": "Users Calendar View Exception Occurrences Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Update Extensions",
					"value": "Users Calendar View Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences List Instances",
					"value": "Users Calendar View Exception Occurrences List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Get Instances",
					"value": "Users Calendar View Exception Occurrences Get Instances",
					"action": "Get instances from users",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances List Attachments",
					"value": "Users Calendar View Exception Occurrences Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Create Attachments",
					"value": "Users Calendar View Exception Occurrences Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Delete Attachments",
					"value": "Users Calendar View Exception Occurrences Instances Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Get Attachments",
					"value": "Users Calendar View Exception Occurrences Instances Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Get Calendar",
					"value": "Users Calendar View Exception Occurrences Instances Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances List Extensions",
					"value": "Users Calendar View Exception Occurrences Instances List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Create Extensions",
					"value": "Users Calendar View Exception Occurrences Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Delete Extensions",
					"value": "Users Calendar View Exception Occurrences Instances Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Get Extensions",
					"value": "Users Calendar View Exception Occurrences Instances Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Update Extensions",
					"value": "Users Calendar View Exception Occurrences Instances Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Create Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Get Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Update Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances List Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Create Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Delete Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Get Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Instances Update Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences List Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Create Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Get Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Update Multi Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences List Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Create Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Delete Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Get Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Exception Occurrences Update Single Value Extended Properties",
					"value": "Users Calendar View Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View List Extensions",
					"value": "Users Calendar View List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Create Extensions",
					"value": "Users Calendar View Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Delete Extensions",
					"value": "Users Calendar View Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Get Extensions",
					"value": "Users Calendar View Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Update Extensions",
					"value": "Users Calendar View Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View List Instances",
					"value": "Users Calendar View List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Users Calendar View Get Instances",
					"value": "Users Calendar View Get Instances",
					"action": "Get instances from users",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances List Attachments",
					"value": "Users Calendar View Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Create Attachments",
					"value": "Users Calendar View Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Delete Attachments",
					"value": "Users Calendar View Instances Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Get Attachments",
					"value": "Users Calendar View Instances Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Get Calendar",
					"value": "Users Calendar View Instances Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Calendar View Instances List Exception Occurrences",
					"value": "Users Calendar View Instances List Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Get Exception Occurrences",
					"value": "Users Calendar View Instances Get Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences List Attachments",
					"value": "Users Calendar View Instances Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Create Attachments",
					"value": "Users Calendar View Instances Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Delete Attachments",
					"value": "Users Calendar View Instances Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Get Attachments",
					"value": "Users Calendar View Instances Exception Occurrences Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Get Calendar",
					"value": "Users Calendar View Instances Exception Occurrences Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences List Extensions",
					"value": "Users Calendar View Instances Exception Occurrences List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Create Extensions",
					"value": "Users Calendar View Instances Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Delete Extensions",
					"value": "Users Calendar View Instances Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Get Extensions",
					"value": "Users Calendar View Instances Exception Occurrences Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Update Extensions",
					"value": "Users Calendar View Instances Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Create Multi Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Get Multi Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Update Multi Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences List Single Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Create Single Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Delete Single Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Get Single Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Exception Occurrences Update Single Value Extended Properties",
					"value": "Users Calendar View Instances Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances List Extensions",
					"value": "Users Calendar View Instances List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Create Extensions",
					"value": "Users Calendar View Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Delete Extensions",
					"value": "Users Calendar View Instances Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Get Extensions",
					"value": "Users Calendar View Instances Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Update Extensions",
					"value": "Users Calendar View Instances Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances List Multi Value Extended Properties",
					"value": "Users Calendar View Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Create Multi Value Extended Properties",
					"value": "Users Calendar View Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Delete Multi Value Extended Properties",
					"value": "Users Calendar View Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Get Multi Value Extended Properties",
					"value": "Users Calendar View Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Update Multi Value Extended Properties",
					"value": "Users Calendar View Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances List Single Value Extended Properties",
					"value": "Users Calendar View Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Create Single Value Extended Properties",
					"value": "Users Calendar View Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Delete Single Value Extended Properties",
					"value": "Users Calendar View Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Get Single Value Extended Properties",
					"value": "Users Calendar View Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Instances Update Single Value Extended Properties",
					"value": "Users Calendar View Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View List Multi Value Extended Properties",
					"value": "Users Calendar View List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Create Multi Value Extended Properties",
					"value": "Users Calendar View Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Delete Multi Value Extended Properties",
					"value": "Users Calendar View Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Get Multi Value Extended Properties",
					"value": "Users Calendar View Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Update Multi Value Extended Properties",
					"value": "Users Calendar View Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View List Single Value Extended Properties",
					"value": "Users Calendar View List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Create Single Value Extended Properties",
					"value": "Users Calendar View Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Calendar View Delete Single Value Extended Properties",
					"value": "Users Calendar View Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Get Single Value Extended Properties",
					"value": "Users Calendar View Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Calendar View Update Single Value Extended Properties",
					"value": "Users Calendar View Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users List Events",
					"value": "Users List Events",
					"action": "List events",
					"description": "Get a list of event objects from the user's default calendar or\nfrom a specified calendar. The list contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, or\nget the instances of an event. There are two scenarios where an app can get events in another user's calendar:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events"
						}
					}
				},
				{
					"name": "Users Create Events",
					"value": "Users Create Events",
					"action": "Create Event",
					"description": "Create an event in the user's default calendar or specified calendar. By default, the **allowNewTimeProposals** property is set to true when an event is created, which means invitees can propose a different date/time for the event. See Propose new meeting times for more information on how to propose a time, and how to receive and accept a new time proposal. You can specify the time zone for each of the start and end times of the event as part of their values, because the \n**start** and **end** properties are of dateTimeTimeZone type. First find the supported time zones to make sure you set only time zones that have been configured for the user's mailbox server.  When an event is sent, the server sends invitations to all the attendees. **Setting the location in an event** An Exchange administrator can set up a mailbox and an email address for a resource such as a meeting room, or equipment\nlike a projector. Users can then invite the resource as an attendee to a meeting. On behalf of the resource, the server accepts or rejects\nthe meeting request based on the free/busy schedule of the resource.\nIf the server accepts a meeting for the resource, it creates an event for the meeting in the resource's calendar. If the meeting is rescheduled,\nthe server automatically updates the event in the resource's calendar. Another advantage of setting up a mailbox for a resource is to control scheduling of the resource, for example, only executives\nor their delegates can book a private meeting room. If you're organizing an event that involves a meeting location: Additionally, if the meeting location has been set up as a resource, or if the event involves some equipment that has been set up as a resource:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events"
						}
					}
				},
				{
					"name": "Users Delete Events",
					"value": "Users Delete Events",
					"action": "Delete navigation property events for users",
					"description": "Delete navigation property events for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Events",
					"value": "Users Get Events",
					"action": "Get events from users",
					"description": "The user's events. Default is to show events under the Default Calendar. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Events",
					"value": "Users Update Events",
					"action": "Update the navigation property events in users",
					"description": "Update the navigation property events in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events List Attachments",
					"value": "Users Events List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Create Attachments",
					"value": "Users Events Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Delete Attachments",
					"value": "Users Events Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Get Attachments",
					"value": "Users Events Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Get Calendar",
					"value": "Users Events Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Events List Exception Occurrences",
					"value": "Users Events List Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Users Events Get Exception Occurrences",
					"value": "Users Events Get Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences List Attachments",
					"value": "Users Events Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Create Attachments",
					"value": "Users Events Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Delete Attachments",
					"value": "Users Events Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Get Attachments",
					"value": "Users Events Exception Occurrences Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Get Calendar",
					"value": "Users Events Exception Occurrences Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences List Extensions",
					"value": "Users Events Exception Occurrences List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Create Extensions",
					"value": "Users Events Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Delete Extensions",
					"value": "Users Events Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Get Extensions",
					"value": "Users Events Exception Occurrences Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Update Extensions",
					"value": "Users Events Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences List Instances",
					"value": "Users Events Exception Occurrences List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Get Instances",
					"value": "Users Events Exception Occurrences Get Instances",
					"action": "Get instances from users",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances List Attachments",
					"value": "Users Events Exception Occurrences Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Create Attachments",
					"value": "Users Events Exception Occurrences Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Delete Attachments",
					"value": "Users Events Exception Occurrences Instances Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Get Attachments",
					"value": "Users Events Exception Occurrences Instances Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Get Calendar",
					"value": "Users Events Exception Occurrences Instances Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances List Extensions",
					"value": "Users Events Exception Occurrences Instances List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Create Extensions",
					"value": "Users Events Exception Occurrences Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Delete Extensions",
					"value": "Users Events Exception Occurrences Instances Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Get Extensions",
					"value": "Users Events Exception Occurrences Instances Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Update Extensions",
					"value": "Users Events Exception Occurrences Instances Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances List Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Create Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Delete Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Get Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Update Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances List Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Create Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Delete Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Get Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Instances Update Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences List Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Create Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Get Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Update Multi Value Extended Properties",
					"value": "Users Events Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences List Single Value Extended Properties",
					"value": "Users Events Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Create Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Delete Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Get Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Exception Occurrences Update Single Value Extended Properties",
					"value": "Users Events Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events List Extensions",
					"value": "Users Events List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Create Extensions",
					"value": "Users Events Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Delete Extensions",
					"value": "Users Events Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Get Extensions",
					"value": "Users Events Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Update Extensions",
					"value": "Users Events Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events List Instances",
					"value": "Users Events List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Users Events Get Instances",
					"value": "Users Events Get Instances",
					"action": "Get instances from users",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances List Attachments",
					"value": "Users Events Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Instances Create Attachments",
					"value": "Users Events Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Instances Delete Attachments",
					"value": "Users Events Instances Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Get Attachments",
					"value": "Users Events Instances Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Get Calendar",
					"value": "Users Events Instances Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Events Instances List Exception Occurrences",
					"value": "Users Events Instances List Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Users Events Instances Get Exception Occurrences",
					"value": "Users Events Instances Get Exception Occurrences",
					"action": "Get exceptionOccurrences from users",
					"description": "Get exceptionOccurrences from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences List Attachments",
					"value": "Users Events Instances Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Create Attachments",
					"value": "Users Events Instances Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Delete Attachments",
					"value": "Users Events Instances Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for users",
					"description": "Delete navigation property attachments for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Get Attachments",
					"value": "Users Events Instances Exception Occurrences Get Attachments",
					"action": "Get attachments from users",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Get Calendar",
					"value": "Users Events Instances Exception Occurrences Get Calendar",
					"action": "Get calendar from users",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences List Extensions",
					"value": "Users Events Instances Exception Occurrences List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Create Extensions",
					"value": "Users Events Instances Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Delete Extensions",
					"value": "Users Events Instances Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Get Extensions",
					"value": "Users Events Instances Exception Occurrences Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Update Extensions",
					"value": "Users Events Instances Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences List Multi Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Create Multi Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Get Multi Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Update Multi Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences List Single Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Create Single Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Delete Single Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Get Single Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Exception Occurrences Update Single Value Extended Properties",
					"value": "Users Events Instances Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances List Extensions",
					"value": "Users Events Instances List Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Instances Create Extensions",
					"value": "Users Events Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Users Events Instances Delete Extensions",
					"value": "Users Events Instances Delete Extensions",
					"action": "Delete navigation property extensions for users",
					"description": "Delete navigation property extensions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Get Extensions",
					"value": "Users Events Instances Get Extensions",
					"action": "Get extensions from users",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Update Extensions",
					"value": "Users Events Instances Update Extensions",
					"action": "Update the navigation property extensions in users",
					"description": "Update the navigation property extensions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances List Multi Value Extended Properties",
					"value": "Users Events Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Create Multi Value Extended Properties",
					"value": "Users Events Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Delete Multi Value Extended Properties",
					"value": "Users Events Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Get Multi Value Extended Properties",
					"value": "Users Events Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Update Multi Value Extended Properties",
					"value": "Users Events Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances List Single Value Extended Properties",
					"value": "Users Events Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Create Single Value Extended Properties",
					"value": "Users Events Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Instances Delete Single Value Extended Properties",
					"value": "Users Events Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Get Single Value Extended Properties",
					"value": "Users Events Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Instances Update Single Value Extended Properties",
					"value": "Users Events Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events List Multi Value Extended Properties",
					"value": "Users Events List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Create Multi Value Extended Properties",
					"value": "Users Events Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for users",
					"description": "Create new navigation property to multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Delete Multi Value Extended Properties",
					"value": "Users Events Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for users",
					"description": "Delete navigation property multiValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Get Multi Value Extended Properties",
					"value": "Users Events Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from users",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Update Multi Value Extended Properties",
					"value": "Users Events Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in users",
					"description": "Update the navigation property multiValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events List Single Value Extended Properties",
					"value": "Users Events List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Create Single Value Extended Properties",
					"value": "Users Events Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for users",
					"description": "Create new navigation property to singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Users Events Delete Single Value Extended Properties",
					"value": "Users Events Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for users",
					"description": "Delete navigation property singleValueExtendedProperties for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Get Single Value Extended Properties",
					"value": "Users Events Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from users",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Users Events Update Single Value Extended Properties",
					"value": "Users Events Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in users",
					"description": "Update the navigation property singleValueExtendedProperties in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/calendarView",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
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
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
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
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
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
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
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
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
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
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "endDateTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Calendar View Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Calendar View Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users List Events"
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
						"Users Event"
					],
					"operation": [
						"Users List Events"
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
						"Users Event"
					],
					"operation": [
						"Users List Events"
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
						"Users Event"
					],
					"operation": [
						"Users List Events"
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
						"Users Event"
					],
					"operation": [
						"Users List Events"
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
						"Users Event"
					],
					"operation": [
						"Users List Events"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users List Events"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Create Events"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Create Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Delete Events"
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
						"Users Event"
					],
					"operation": [
						"Users Delete Events"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Get Events"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Get Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Update Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Update Events"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Attachments"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Extensions"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Delete Multi Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/events/{event-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Delete Single Value Extended Properties"
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
						"Users Event"
					],
					"operation": [
						"Users Events Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Event"
					],
					"operation": [
						"Users Events Update Single Value Extended Properties"
					]
				}
			}
		},
];
