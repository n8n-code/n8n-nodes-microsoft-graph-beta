import type { INodeProperties } from 'n8n-workflow';

export const groupsEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Calendar View",
					"value": "Groups List Calendar View",
					"action": "Get calendarView from groups",
					"description": "The calendar view for the calendar. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView"
						}
					}
				},
				{
					"name": "Groups Get Calendar View",
					"value": "Groups Get Calendar View",
					"action": "Get calendarView from groups",
					"description": "The calendar view for the calendar. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View List Attachments",
					"value": "Groups Calendar View List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Create Attachments",
					"value": "Groups Calendar View Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Delete Attachments",
					"value": "Groups Calendar View Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Attachments",
					"value": "Groups Calendar View Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Calendar",
					"value": "Groups Calendar View Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Calendar View List Exception Occurrences",
					"value": "Groups Calendar View List Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Exception Occurrences",
					"value": "Groups Calendar View Get Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences List Attachments",
					"value": "Groups Calendar View Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Create Attachments",
					"value": "Groups Calendar View Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Delete Attachments",
					"value": "Groups Calendar View Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Get Attachments",
					"value": "Groups Calendar View Exception Occurrences Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Get Calendar",
					"value": "Groups Calendar View Exception Occurrences Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences List Extensions",
					"value": "Groups Calendar View Exception Occurrences List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Create Extensions",
					"value": "Groups Calendar View Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Delete Extensions",
					"value": "Groups Calendar View Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Get Extensions",
					"value": "Groups Calendar View Exception Occurrences Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Update Extensions",
					"value": "Groups Calendar View Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences List Instances",
					"value": "Groups Calendar View Exception Occurrences List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Get Instances",
					"value": "Groups Calendar View Exception Occurrences Get Instances",
					"action": "Get instances from groups",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances List Attachments",
					"value": "Groups Calendar View Exception Occurrences Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Create Attachments",
					"value": "Groups Calendar View Exception Occurrences Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Delete Attachments",
					"value": "Groups Calendar View Exception Occurrences Instances Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Get Attachments",
					"value": "Groups Calendar View Exception Occurrences Instances Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Get Calendar",
					"value": "Groups Calendar View Exception Occurrences Instances Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances List Extensions",
					"value": "Groups Calendar View Exception Occurrences Instances List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Create Extensions",
					"value": "Groups Calendar View Exception Occurrences Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Delete Extensions",
					"value": "Groups Calendar View Exception Occurrences Instances Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Get Extensions",
					"value": "Groups Calendar View Exception Occurrences Instances Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Update Extensions",
					"value": "Groups Calendar View Exception Occurrences Instances Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Create Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Get Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Update Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Create Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Delete Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Get Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Instances Update Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences List Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Create Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Get Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Update Multi Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences List Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Create Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Delete Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Get Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Exception Occurrences Update Single Value Extended Properties",
					"value": "Groups Calendar View Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View List Extensions",
					"value": "Groups Calendar View List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Create Extensions",
					"value": "Groups Calendar View Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Delete Extensions",
					"value": "Groups Calendar View Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Extensions",
					"value": "Groups Calendar View Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Update Extensions",
					"value": "Groups Calendar View Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View List Instances",
					"value": "Groups Calendar View List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Instances",
					"value": "Groups Calendar View Get Instances",
					"action": "Get instances from groups",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances List Attachments",
					"value": "Groups Calendar View Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Create Attachments",
					"value": "Groups Calendar View Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Delete Attachments",
					"value": "Groups Calendar View Instances Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Get Attachments",
					"value": "Groups Calendar View Instances Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Get Calendar",
					"value": "Groups Calendar View Instances Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances List Exception Occurrences",
					"value": "Groups Calendar View Instances List Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Get Exception Occurrences",
					"value": "Groups Calendar View Instances Get Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences List Attachments",
					"value": "Groups Calendar View Instances Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Create Attachments",
					"value": "Groups Calendar View Instances Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Delete Attachments",
					"value": "Groups Calendar View Instances Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Get Attachments",
					"value": "Groups Calendar View Instances Exception Occurrences Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Get Calendar",
					"value": "Groups Calendar View Instances Exception Occurrences Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences List Extensions",
					"value": "Groups Calendar View Instances Exception Occurrences List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Create Extensions",
					"value": "Groups Calendar View Instances Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Delete Extensions",
					"value": "Groups Calendar View Instances Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Get Extensions",
					"value": "Groups Calendar View Instances Exception Occurrences Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Update Extensions",
					"value": "Groups Calendar View Instances Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Create Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Get Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Update Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Create Single Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Delete Single Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Get Single Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Exception Occurrences Update Single Value Extended Properties",
					"value": "Groups Calendar View Instances Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances List Extensions",
					"value": "Groups Calendar View Instances List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Create Extensions",
					"value": "Groups Calendar View Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Delete Extensions",
					"value": "Groups Calendar View Instances Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Get Extensions",
					"value": "Groups Calendar View Instances Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Update Extensions",
					"value": "Groups Calendar View Instances Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances List Multi Value Extended Properties",
					"value": "Groups Calendar View Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Create Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Delete Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Get Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Update Multi Value Extended Properties",
					"value": "Groups Calendar View Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances List Single Value Extended Properties",
					"value": "Groups Calendar View Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Create Single Value Extended Properties",
					"value": "Groups Calendar View Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Delete Single Value Extended Properties",
					"value": "Groups Calendar View Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Get Single Value Extended Properties",
					"value": "Groups Calendar View Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Instances Update Single Value Extended Properties",
					"value": "Groups Calendar View Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View List Multi Value Extended Properties",
					"value": "Groups Calendar View List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Create Multi Value Extended Properties",
					"value": "Groups Calendar View Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Delete Multi Value Extended Properties",
					"value": "Groups Calendar View Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Multi Value Extended Properties",
					"value": "Groups Calendar View Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Update Multi Value Extended Properties",
					"value": "Groups Calendar View Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View List Single Value Extended Properties",
					"value": "Groups Calendar View List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Create Single Value Extended Properties",
					"value": "Groups Calendar View Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Calendar View Delete Single Value Extended Properties",
					"value": "Groups Calendar View Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Get Single Value Extended Properties",
					"value": "Groups Calendar View Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Calendar View Update Single Value Extended Properties",
					"value": "Groups Calendar View Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups List Events",
					"value": "Groups List Events",
					"action": "List events",
					"description": "Retrieve a list of event objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events"
						}
					}
				},
				{
					"name": "Groups Create Events",
					"value": "Groups Create Events",
					"action": "Create event",
					"description": "Use this API to create a new event.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events"
						}
					}
				},
				{
					"name": "Groups Delete Events",
					"value": "Groups Delete Events",
					"action": "Delete navigation property events for groups",
					"description": "Delete navigation property events for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Events",
					"value": "Groups Get Events",
					"action": "Get events from groups",
					"description": "The group's events.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update Events",
					"value": "Groups Update Events",
					"action": "Update the navigation property events in groups",
					"description": "Update the navigation property events in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events List Attachments",
					"value": "Groups Events List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Create Attachments",
					"value": "Groups Events Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Delete Attachments",
					"value": "Groups Events Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Get Attachments",
					"value": "Groups Events Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Get Calendar",
					"value": "Groups Events Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Events List Exception Occurrences",
					"value": "Groups Events List Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Groups Events Get Exception Occurrences",
					"value": "Groups Events Get Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences List Attachments",
					"value": "Groups Events Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Create Attachments",
					"value": "Groups Events Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Delete Attachments",
					"value": "Groups Events Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Get Attachments",
					"value": "Groups Events Exception Occurrences Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Get Calendar",
					"value": "Groups Events Exception Occurrences Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences List Extensions",
					"value": "Groups Events Exception Occurrences List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Create Extensions",
					"value": "Groups Events Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Delete Extensions",
					"value": "Groups Events Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Get Extensions",
					"value": "Groups Events Exception Occurrences Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Update Extensions",
					"value": "Groups Events Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences List Instances",
					"value": "Groups Events Exception Occurrences List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Get Instances",
					"value": "Groups Events Exception Occurrences Get Instances",
					"action": "Get instances from groups",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances List Attachments",
					"value": "Groups Events Exception Occurrences Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Create Attachments",
					"value": "Groups Events Exception Occurrences Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Delete Attachments",
					"value": "Groups Events Exception Occurrences Instances Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Get Attachments",
					"value": "Groups Events Exception Occurrences Instances Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Get Calendar",
					"value": "Groups Events Exception Occurrences Instances Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances List Extensions",
					"value": "Groups Events Exception Occurrences Instances List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Create Extensions",
					"value": "Groups Events Exception Occurrences Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Delete Extensions",
					"value": "Groups Events Exception Occurrences Instances Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Get Extensions",
					"value": "Groups Events Exception Occurrences Instances Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Update Extensions",
					"value": "Groups Events Exception Occurrences Instances Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances List Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Create Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Delete Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Get Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Update Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances List Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Create Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Delete Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Get Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Instances Update Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences List Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Create Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Get Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Update Multi Value Extended Properties",
					"value": "Groups Events Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences List Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Create Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Delete Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Get Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Exception Occurrences Update Single Value Extended Properties",
					"value": "Groups Events Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events List Extensions",
					"value": "Groups Events List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Create Extensions",
					"value": "Groups Events Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Delete Extensions",
					"value": "Groups Events Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Get Extensions",
					"value": "Groups Events Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Update Extensions",
					"value": "Groups Events Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events List Instances",
					"value": "Groups Events List Instances",
					"action": "List instances",
					"description": "Get the instances (occurrences) of an event for a specified time range.  If the event is a `seriesMaster` type, this returns the\noccurrences and exceptions of the event in the specified time range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Groups Events Get Instances",
					"value": "Groups Events Get Instances",
					"action": "Get instances from groups",
					"description": "The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances List Attachments",
					"value": "Groups Events Instances List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Instances Create Attachments",
					"value": "Groups Events Instances Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Instances Delete Attachments",
					"value": "Groups Events Instances Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Get Attachments",
					"value": "Groups Events Instances Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Get Calendar",
					"value": "Groups Events Instances Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Events Instances List Exception Occurrences",
					"value": "Groups Events Instances List Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences"
						}
					}
				},
				{
					"name": "Groups Events Instances Get Exception Occurrences",
					"value": "Groups Events Instances Get Exception Occurrences",
					"action": "Get exceptionOccurrences from groups",
					"description": "Get exceptionOccurrences from groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences List Attachments",
					"value": "Groups Events Instances Exception Occurrences List Attachments",
					"action": "List attachments",
					"description": "Retrieve a list of attachment objects attached to an event.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Create Attachments",
					"value": "Groups Events Instances Exception Occurrences Create Attachments",
					"action": "Add attachment",
					"description": "Use this API to add an attachment to an existing event. This operation limits the size of the attachment you can add to under 3 MB. If an organizer adds an attachment to a meeting event, the organizer can subsequently update the event to send the attachment and update the event for each attendee as well.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Delete Attachments",
					"value": "Groups Events Instances Exception Occurrences Delete Attachments",
					"action": "Delete navigation property attachments for groups",
					"description": "Delete navigation property attachments for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Get Attachments",
					"value": "Groups Events Instances Exception Occurrences Get Attachments",
					"action": "Get attachments from groups",
					"description": "The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/attachments/{{$parameter[\"attachment-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Get Calendar",
					"value": "Groups Events Instances Exception Occurrences Get Calendar",
					"action": "Get calendar from groups",
					"description": "The calendar that contains the event. Navigation property. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/calendar"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences List Extensions",
					"value": "Groups Events Instances Exception Occurrences List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Create Extensions",
					"value": "Groups Events Instances Exception Occurrences Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Delete Extensions",
					"value": "Groups Events Instances Exception Occurrences Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Get Extensions",
					"value": "Groups Events Instances Exception Occurrences Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Update Extensions",
					"value": "Groups Events Instances Exception Occurrences Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences List Multi Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Create Multi Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Delete Multi Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Get Multi Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Update Multi Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences List Single Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Create Single Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Delete Single Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Get Single Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Exception Occurrences Update Single Value Extended Properties",
					"value": "Groups Events Instances Exception Occurrences Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/{{$parameter[\"event-id2\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances List Extensions",
					"value": "Groups Events Instances List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Instances Create Extensions",
					"value": "Groups Events Instances Create Extensions",
					"action": "Create openTypeExtension",
					"description": "Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. See known limitations of open extensions for more information. The table in the Permissions section lists the resources that support open extensions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Events Instances Delete Extensions",
					"value": "Groups Events Instances Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Get Extensions",
					"value": "Groups Events Instances Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the event. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Update Extensions",
					"value": "Groups Events Instances Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances List Multi Value Extended Properties",
					"value": "Groups Events Instances List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Create Multi Value Extended Properties",
					"value": "Groups Events Instances Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Delete Multi Value Extended Properties",
					"value": "Groups Events Instances Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Get Multi Value Extended Properties",
					"value": "Groups Events Instances Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Update Multi Value Extended Properties",
					"value": "Groups Events Instances Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances List Single Value Extended Properties",
					"value": "Groups Events Instances List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Create Single Value Extended Properties",
					"value": "Groups Events Instances Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Instances Delete Single Value Extended Properties",
					"value": "Groups Events Instances Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Get Single Value Extended Properties",
					"value": "Groups Events Instances Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Instances Update Single Value Extended Properties",
					"value": "Groups Events Instances Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events List Multi Value Extended Properties",
					"value": "Groups Events List Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Create Multi Value Extended Properties",
					"value": "Groups Events Create Multi Value Extended Properties",
					"action": "Create new navigation property to multiValueExtendedProperties for groups",
					"description": "Create new navigation property to multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Delete Multi Value Extended Properties",
					"value": "Groups Events Delete Multi Value Extended Properties",
					"action": "Delete navigation property multiValueExtendedProperties for groups",
					"description": "Delete navigation property multiValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Get Multi Value Extended Properties",
					"value": "Groups Events Get Multi Value Extended Properties",
					"action": "Get multiValueExtendedProperties from groups",
					"description": "The collection of multi-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Update Multi Value Extended Properties",
					"value": "Groups Events Update Multi Value Extended Properties",
					"action": "Update the navigation property multiValueExtendedProperties in groups",
					"description": "Update the navigation property multiValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/multiValueExtendedProperties/{{$parameter[\"multiValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events List Single Value Extended Properties",
					"value": "Groups Events List Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Create Single Value Extended Properties",
					"value": "Groups Events Create Single Value Extended Properties",
					"action": "Create new navigation property to singleValueExtendedProperties for groups",
					"description": "Create new navigation property to singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties"
						}
					}
				},
				{
					"name": "Groups Events Delete Single Value Extended Properties",
					"value": "Groups Events Delete Single Value Extended Properties",
					"action": "Delete navigation property singleValueExtendedProperties for groups",
					"description": "Delete navigation property singleValueExtendedProperties for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Get Single Value Extended Properties",
					"value": "Groups Events Get Single Value Extended Properties",
					"action": "Get singleValueExtendedProperties from groups",
					"description": "The collection of single-value extended properties defined for the event. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Events Update Single Value Extended Properties",
					"value": "Groups Events Update Single Value Extended Properties",
					"action": "Update the navigation property singleValueExtendedProperties in groups",
					"description": "Update the navigation property singleValueExtendedProperties in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/events/{{$parameter[\"event-id\"]}}/singleValueExtendedProperties/{{$parameter[\"singleValueLegacyExtendedProperty-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups List Calendar View"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Get Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups Get Calendar View"
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
						"Groups Event"
					],
					"operation": [
						"Groups Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Get Calendar View"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/calendarView/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Calendar View Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
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
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups List Events"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Create Events"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Create Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Delete Events"
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
						"Groups Event"
					],
					"operation": [
						"Groups Delete Events"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Get Events"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Get Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Update Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Update Events"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/exceptionOccurrences/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Exception Occurrences"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Attachments"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/attachments/{attachment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Attachments"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/calendar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Calendar"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/{event-id2}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Exception Occurrences Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Extensions"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/instances/{event-id1}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Instances Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/multiValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/multiValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Multi Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/multiValueExtendedProperties/{multiValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Update Multi Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events List Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/singleValueExtendedProperties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/events/{event-id}/singleValueExtendedProperties<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Create Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Single Value Extended Properties"
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
						"Groups Event"
					],
					"operation": [
						"Groups Events Delete Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Get Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Update Single Value Extended Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/events/{event-id}/singleValueExtendedProperties/{singleValueLegacyExtendedProperty-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Event"
					],
					"operation": [
						"Groups Events Update Single Value Extended Properties"
					]
				}
			}
		},
];
