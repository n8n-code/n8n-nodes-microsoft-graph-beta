import type { INodeProperties } from 'n8n-workflow';

export const sitesListDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					]
				}
			},
			"options": [
				{
					"name": "Sites List Lists",
					"value": "Sites List Lists",
					"action": "Enumerate lists in a site",
					"description": "Get the collection of [lists][] for a [site][]. Lists with the [system][] facet are hidden by default.\nTo list them, include `system` in your `$select` statement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists"
						}
					}
				},
				{
					"name": "Sites Create Lists",
					"value": "Sites Create Lists",
					"action": "Create a new list",
					"description": "Create a new [list][] in a [site][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists"
						}
					}
				},
				{
					"name": "Sites Delete Lists",
					"value": "Sites Delete Lists",
					"action": "Delete navigation property lists for sites",
					"description": "Delete navigation property lists for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Get Lists",
					"value": "Sites Get Lists",
					"action": "Get lists from sites",
					"description": "The collection of lists under this site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Update Lists",
					"value": "Sites Update Lists",
					"action": "Update the navigation property lists in sites",
					"description": "Update the navigation property lists in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists List Activities",
					"value": "Sites Lists List Activities",
					"action": "Get activities from sites",
					"description": "The recent activities that took place within this list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Sites Lists Create Activities",
					"value": "Sites Lists Create Activities",
					"action": "Create new navigation property to activities for sites",
					"description": "Create new navigation property to activities for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Sites Lists List Columns",
					"value": "Sites Lists List Columns",
					"action": "List columns in a list",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [list][list].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Lists Create Columns",
					"value": "Sites Lists Create Columns",
					"action": "Create columnDefinition",
					"description": "Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Lists Delete Columns",
					"value": "Sites Lists Delete Columns",
					"action": "Delete navigation property columns for sites",
					"description": "Delete navigation property columns for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Get Columns",
					"value": "Sites Lists Get Columns",
					"action": "Get columns from sites",
					"description": "Get columns from sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Update Columns",
					"value": "Sites Lists Update Columns",
					"action": "Update the navigation property columns in sites",
					"description": "Update the navigation property columns in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Columns Get Source Column",
					"value": "Sites Lists Columns Get Source Column",
					"action": "Get sourceColumn from sites",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				},
				{
					"name": "Sites Lists List Content Types",
					"value": "Sites Lists List Content Types",
					"action": "List contentTypes in a list",
					"description": "Get the collection of [contentType][contentType] resources in a [list][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes"
						}
					}
				},
				{
					"name": "Sites Lists Create Content Types",
					"value": "Sites Lists Create Content Types",
					"action": "Create new navigation property to contentTypes for sites",
					"description": "Create new navigation property to contentTypes for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes"
						}
					}
				},
				{
					"name": "Sites Lists Delete Content Types",
					"value": "Sites Lists Delete Content Types",
					"action": "Delete navigation property contentTypes for sites",
					"description": "Delete navigation property contentTypes for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Get Content Types",
					"value": "Sites Lists Get Content Types",
					"action": "Get contentTypes from sites",
					"description": "Get contentTypes from sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Update Content Types",
					"value": "Sites Lists Update Content Types",
					"action": "Update the navigation property contentTypes in sites",
					"description": "Update the navigation property contentTypes in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Get Base",
					"value": "Sites Lists Content Types Get Base",
					"action": "Get base from sites",
					"description": "Parent contentType from which this content type is derived.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/base"
						}
					}
				},
				{
					"name": "Sites Lists Content Types List Base Types",
					"value": "Sites Lists Content Types List Base Types",
					"action": "Get baseTypes from sites",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Get Base Types",
					"value": "Sites Lists Content Types Get Base Types",
					"action": "Get baseTypes from sites",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes/{{$parameter[\"contentType-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types List Column Links",
					"value": "Sites Lists Content Types List Column Links",
					"action": "Get columnLinks from sites",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Create Column Links",
					"value": "Sites Lists Content Types Create Column Links",
					"action": "Create new navigation property to columnLinks for sites",
					"description": "Create new navigation property to columnLinks for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Delete Column Links",
					"value": "Sites Lists Content Types Delete Column Links",
					"action": "Delete navigation property columnLinks for sites",
					"description": "Delete navigation property columnLinks for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Get Column Links",
					"value": "Sites Lists Content Types Get Column Links",
					"action": "Get columnLinks from sites",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Update Column Links",
					"value": "Sites Lists Content Types Update Column Links",
					"action": "Update the navigation property columnLinks in sites",
					"description": "Update the navigation property columnLinks in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types List Column Positions",
					"value": "Sites Lists Content Types List Column Positions",
					"action": "Get columnPositions from sites",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Get Column Positions",
					"value": "Sites Lists Content Types Get Column Positions",
					"action": "Get columnPositions from sites",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types List Columns",
					"value": "Sites Lists Content Types List Columns",
					"action": "List columns in a content type",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [content type][contentType].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Create Columns",
					"value": "Sites Lists Content Types Create Columns",
					"action": "Create columnDefinition for a content type",
					"description": "Add a column to a [content type][contentType] in a site or list by specifying a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Delete Columns",
					"value": "Sites Lists Content Types Delete Columns",
					"action": "Delete navigation property columns for sites",
					"description": "Delete navigation property columns for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Get Columns",
					"value": "Sites Lists Content Types Get Columns",
					"action": "Get columns from sites",
					"description": "The collection of column definitions for this contentType.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Update Columns",
					"value": "Sites Lists Content Types Update Columns",
					"action": "Update the navigation property columns in sites",
					"description": "Update the navigation property columns in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Content Types Columns Get Source Column",
					"value": "Sites Lists Content Types Columns Get Source Column",
					"action": "Get sourceColumn from sites",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				},
				{
					"name": "Sites Lists Get Drive",
					"value": "Sites Lists Get Drive",
					"action": "Get drive from sites",
					"description": "Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/drive"
						}
					}
				},
				{
					"name": "Sites Lists List Items",
					"value": "Sites Lists List Items",
					"action": "Enumerate items in a list",
					"description": "Get the collection of [items][item] in a [list][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items"
						}
					}
				},
				{
					"name": "Sites Lists Create Items",
					"value": "Sites Lists Create Items",
					"action": "Create a new item in a list",
					"description": "Create a new [listItem][] in a [list][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items"
						}
					}
				},
				{
					"name": "Sites Lists Delete Items",
					"value": "Sites Lists Delete Items",
					"action": "Delete navigation property items for sites",
					"description": "Delete navigation property items for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Get Items",
					"value": "Sites Lists Get Items",
					"action": "Get items from sites",
					"description": "All items contained in the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Update Items",
					"value": "Sites Lists Update Items",
					"action": "Update the navigation property items in sites",
					"description": "Update the navigation property items in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items List Activities",
					"value": "Sites Lists Items List Activities",
					"action": "Get activities from sites",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Sites Lists Items Create Activities",
					"value": "Sites Lists Items Create Activities",
					"action": "Create new navigation property to activities for sites",
					"description": "Create new navigation property to activities for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Sites Lists Items Delete Activities",
					"value": "Sites Lists Items Delete Activities",
					"action": "Delete navigation property activities for sites",
					"description": "Delete navigation property activities for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Activities",
					"value": "Sites Lists Items Get Activities",
					"action": "Get activities from sites",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Update Activities",
					"value": "Sites Lists Items Update Activities",
					"action": "Update the navigation property activities in sites",
					"description": "Update the navigation property activities in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Activities Get Drive Item",
					"value": "Sites Lists Items Activities Get Drive Item",
					"action": "Get driveItem from sites",
					"description": "Get driveItem from sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Sites Lists Items Activities Get Drive Item Content",
					"value": "Sites Lists Items Activities Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from sites",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Sites Lists Items Activities Update Drive Item Content",
					"value": "Sites Lists Items Activities Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in sites",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Sites Lists Items Activities Get List Item",
					"value": "Sites Lists Items Activities Get List Item",
					"action": "Get listItem from sites",
					"description": "Get listItem from sites",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/listItem"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Analytics",
					"value": "Sites Lists Items Get Analytics",
					"action": "Get analytics from sites",
					"description": "Analytics about the view activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Sites Lists Items List Document Set Versions",
					"value": "Sites Lists Items List Document Set Versions",
					"action": "List documentSetVersions",
					"description": "Get a list of the versions of a document set item in a list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions"
						}
					}
				},
				{
					"name": "Sites Lists Items Create Document Set Versions",
					"value": "Sites Lists Items Create Document Set Versions",
					"action": "Create documentSetVersion",
					"description": "Create a new version of a document set item in a list.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions"
						}
					}
				},
				{
					"name": "Sites Lists Items Delete Document Set Versions",
					"value": "Sites Lists Items Delete Document Set Versions",
					"action": "Delete navigation property documentSetVersions for sites",
					"description": "Delete navigation property documentSetVersions for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Document Set Versions",
					"value": "Sites Lists Items Get Document Set Versions",
					"action": "Get documentSetVersions from sites",
					"description": "Version information for a document set version created by a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Update Document Set Versions",
					"value": "Sites Lists Items Update Document Set Versions",
					"action": "Update the navigation property documentSetVersions in sites",
					"description": "Update the navigation property documentSetVersions in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Drive Item",
					"value": "Sites Lists Items Get Drive Item",
					"action": "Get driveItem from sites",
					"description": "For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Drive Item Content",
					"value": "Sites Lists Items Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from sites",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Sites Lists Items Update Drive Item Content",
					"value": "Sites Lists Items Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in sites",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Sites Lists Items Delete Fields",
					"value": "Sites Lists Items Delete Fields",
					"action": "Delete navigation property fields for sites",
					"description": "Delete navigation property fields for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Fields",
					"value": "Sites Lists Items Get Fields",
					"action": "Get fields from sites",
					"description": "The values of the columns set on this list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Sites Lists Items Update Fields",
					"value": "Sites Lists Items Update Fields",
					"action": "Update an item in a list",
					"description": "Update the properties on a **[listItem][]**.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Sites Lists Items List Versions",
					"value": "Sites Lists Items List Versions",
					"action": "Get versions from sites",
					"description": "The list of previous versions of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Sites Lists Items Create Versions",
					"value": "Sites Lists Items Create Versions",
					"action": "Create new navigation property to versions for sites",
					"description": "Create new navigation property to versions for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Sites Lists Items Delete Versions",
					"value": "Sites Lists Items Delete Versions",
					"action": "Delete navigation property versions for sites",
					"description": "Delete navigation property versions for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Get Versions",
					"value": "Sites Lists Items Get Versions",
					"action": "Get versions from sites",
					"description": "The list of previous versions of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Update Versions",
					"value": "Sites Lists Items Update Versions",
					"action": "Update the navigation property versions in sites",
					"description": "Update the navigation property versions in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Items Versions Delete Fields",
					"value": "Sites Lists Items Versions Delete Fields",
					"action": "Delete navigation property fields for sites",
					"description": "Delete navigation property fields for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Sites Lists Items Versions Get Fields",
					"value": "Sites Lists Items Versions Get Fields",
					"action": "Get fields from sites",
					"description": "A collection of the fields and values for this version of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Sites Lists Items Versions Update Fields",
					"value": "Sites Lists Items Versions Update Fields",
					"action": "Update the navigation property fields in sites",
					"description": "Update the navigation property fields in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Sites Lists List Operations",
					"value": "Sites Lists List Operations",
					"action": "Get operations from sites",
					"description": "The collection of long running operations for the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Sites Lists Create Operations",
					"value": "Sites Lists Create Operations",
					"action": "Create new navigation property to operations for sites",
					"description": "Create new navigation property to operations for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Sites Lists Delete Operations",
					"value": "Sites Lists Delete Operations",
					"action": "Delete navigation property operations for sites",
					"description": "Delete navigation property operations for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Get Operations",
					"value": "Sites Lists Get Operations",
					"action": "Get operations from sites",
					"description": "The collection of long running operations for the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Update Operations",
					"value": "Sites Lists Update Operations",
					"action": "Update the navigation property operations in sites",
					"description": "Update the navigation property operations in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists List Subscriptions",
					"value": "Sites Lists List Subscriptions",
					"action": "Get subscriptions from sites",
					"description": "The set of subscriptions on the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions"
						}
					}
				},
				{
					"name": "Sites Lists Create Subscriptions",
					"value": "Sites Lists Create Subscriptions",
					"action": "Create new navigation property to subscriptions for sites",
					"description": "Create new navigation property to subscriptions for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions"
						}
					}
				},
				{
					"name": "Sites Lists Delete Subscriptions",
					"value": "Sites Lists Delete Subscriptions",
					"action": "Delete navigation property subscriptions for sites",
					"description": "Delete navigation property subscriptions for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Get Subscriptions",
					"value": "Sites Lists Get Subscriptions",
					"action": "Get subscriptions from sites",
					"description": "The set of subscriptions on the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Lists Update Subscriptions",
					"value": "Sites Lists Update Subscriptions",
					"action": "Update the navigation property subscriptions in sites",
					"description": "Update the navigation property subscriptions in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sites/{site-id}/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
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
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites List Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Create Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Create Lists"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Delete Lists"
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
						"Sites List"
					],
					"operation": [
						"Sites Delete Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Get Lists"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Get Lists"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Get Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Update Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Update Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Columns"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Content Types"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/base",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Delete Column Links"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Delete Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Delete Columns"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/drive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Drive"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Drive"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Drive"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Items"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Items"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Activities"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Create Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Create Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Document Set Versions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /sites/{site-id}/lists/{list-id}/items/{listItem-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Fields"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/fields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Versions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Delete Fields"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Delete Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Update Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/fields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Items Versions Update Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Operations"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/operations/{richLongRunningOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/subscriptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Subscriptions"
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
						"Sites List"
					],
					"operation": [
						"Sites Lists Delete Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites List"
					],
					"operation": [
						"Sites Lists Update Subscriptions"
					]
				}
			}
		},
];
