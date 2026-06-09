import type { INodeProperties } from 'n8n-workflow';

export const sharesListDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					]
				}
			},
			"options": [
				{
					"name": "Shares Delete List",
					"value": "Shares Delete List",
					"action": "Delete navigation property list for shares",
					"description": "Delete navigation property list for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list"
						}
					}
				},
				{
					"name": "Shares Get List",
					"value": "Shares Get List",
					"action": "Get list from shares",
					"description": "Used to access the underlying list",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list"
						}
					}
				},
				{
					"name": "Shares Update List",
					"value": "Shares Update List",
					"action": "Update the navigation property list in shares",
					"description": "Update the navigation property list in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list"
						}
					}
				},
				{
					"name": "Shares List List Activities",
					"value": "Shares List List Activities",
					"action": "Get activities from shares",
					"description": "The recent activities that took place within this list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/activities"
						}
					}
				},
				{
					"name": "Shares List Create Activities",
					"value": "Shares List Create Activities",
					"action": "Create new navigation property to activities for shares",
					"description": "Create new navigation property to activities for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/activities"
						}
					}
				},
				{
					"name": "Shares List List Columns",
					"value": "Shares List List Columns",
					"action": "List columns in a list",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [list][list].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/columns"
						}
					}
				},
				{
					"name": "Shares List Create Columns",
					"value": "Shares List Create Columns",
					"action": "Create columnDefinition",
					"description": "Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/columns"
						}
					}
				},
				{
					"name": "Shares List Delete Columns",
					"value": "Shares List Delete Columns",
					"action": "Delete navigation property columns for shares",
					"description": "Delete navigation property columns for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Get Columns",
					"value": "Shares List Get Columns",
					"action": "Get columns from shares",
					"description": "Get columns from shares",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Update Columns",
					"value": "Shares List Update Columns",
					"action": "Update the navigation property columns in shares",
					"description": "Update the navigation property columns in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Columns Get Source Column",
					"value": "Shares List Columns Get Source Column",
					"action": "Get sourceColumn from shares",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				},
				{
					"name": "Shares List List Content Types",
					"value": "Shares List List Content Types",
					"action": "List contentTypes in a list",
					"description": "Get the collection of [contentType][contentType] resources in a [list][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes"
						}
					}
				},
				{
					"name": "Shares List Create Content Types",
					"value": "Shares List Create Content Types",
					"action": "Create new navigation property to contentTypes for shares",
					"description": "Create new navigation property to contentTypes for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes"
						}
					}
				},
				{
					"name": "Shares List Delete Content Types",
					"value": "Shares List Delete Content Types",
					"action": "Delete navigation property contentTypes for shares",
					"description": "Delete navigation property contentTypes for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Get Content Types",
					"value": "Shares List Get Content Types",
					"action": "Get contentTypes from shares",
					"description": "Get contentTypes from shares",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Update Content Types",
					"value": "Shares List Update Content Types",
					"action": "Update the navigation property contentTypes in shares",
					"description": "Update the navigation property contentTypes in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types Get Base",
					"value": "Shares List Content Types Get Base",
					"action": "Get base from shares",
					"description": "Parent contentType from which this content type is derived.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/base"
						}
					}
				},
				{
					"name": "Shares List Content Types List Base Types",
					"value": "Shares List Content Types List Base Types",
					"action": "Get baseTypes from shares",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes"
						}
					}
				},
				{
					"name": "Shares List Content Types Get Base Types",
					"value": "Shares List Content Types Get Base Types",
					"action": "Get baseTypes from shares",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes/{{$parameter[\"contentType-id1\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types List Column Links",
					"value": "Shares List Content Types List Column Links",
					"action": "Get columnLinks from shares",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Shares List Content Types Create Column Links",
					"value": "Shares List Content Types Create Column Links",
					"action": "Create new navigation property to columnLinks for shares",
					"description": "Create new navigation property to columnLinks for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Shares List Content Types Delete Column Links",
					"value": "Shares List Content Types Delete Column Links",
					"action": "Delete navigation property columnLinks for shares",
					"description": "Delete navigation property columnLinks for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types Get Column Links",
					"value": "Shares List Content Types Get Column Links",
					"action": "Get columnLinks from shares",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types Update Column Links",
					"value": "Shares List Content Types Update Column Links",
					"action": "Update the navigation property columnLinks in shares",
					"description": "Update the navigation property columnLinks in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types List Column Positions",
					"value": "Shares List Content Types List Column Positions",
					"action": "Get columnPositions from shares",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions"
						}
					}
				},
				{
					"name": "Shares List Content Types Get Column Positions",
					"value": "Shares List Content Types Get Column Positions",
					"action": "Get columnPositions from shares",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types List Columns",
					"value": "Shares List Content Types List Columns",
					"action": "List columns in a content type",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [content type][contentType].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Shares List Content Types Create Columns",
					"value": "Shares List Content Types Create Columns",
					"action": "Create columnDefinition for a content type",
					"description": "Add a column to a [content type][contentType] in a site or list by specifying a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Shares List Content Types Delete Columns",
					"value": "Shares List Content Types Delete Columns",
					"action": "Delete navigation property columns for shares",
					"description": "Delete navigation property columns for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types Get Columns",
					"value": "Shares List Content Types Get Columns",
					"action": "Get columns from shares",
					"description": "The collection of column definitions for this contentType.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types Update Columns",
					"value": "Shares List Content Types Update Columns",
					"action": "Update the navigation property columns in shares",
					"description": "Update the navigation property columns in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Content Types Columns Get Source Column",
					"value": "Shares List Content Types Columns Get Source Column",
					"action": "Get sourceColumn from shares",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				},
				{
					"name": "Shares List Get Drive",
					"value": "Shares List Get Drive",
					"action": "Get drive from shares",
					"description": "Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/drive"
						}
					}
				},
				{
					"name": "Shares List List Items",
					"value": "Shares List List Items",
					"action": "Enumerate items in a list",
					"description": "Get the collection of [items][item] in a [list][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items"
						}
					}
				},
				{
					"name": "Shares List Create Items",
					"value": "Shares List Create Items",
					"action": "Create a new item in a list",
					"description": "Create a new [listItem][] in a [list][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items"
						}
					}
				},
				{
					"name": "Shares List Delete Items",
					"value": "Shares List Delete Items",
					"action": "Delete navigation property items for shares",
					"description": "Delete navigation property items for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Get Items",
					"value": "Shares List Get Items",
					"action": "Get items from shares",
					"description": "All items contained in the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Update Items",
					"value": "Shares List Update Items",
					"action": "Update the navigation property items in shares",
					"description": "Update the navigation property items in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items List Activities",
					"value": "Shares List Items List Activities",
					"action": "Get activities from shares",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Shares List Items Create Activities",
					"value": "Shares List Items Create Activities",
					"action": "Create new navigation property to activities for shares",
					"description": "Create new navigation property to activities for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Shares List Items Delete Activities",
					"value": "Shares List Items Delete Activities",
					"action": "Delete navigation property activities for shares",
					"description": "Delete navigation property activities for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Get Activities",
					"value": "Shares List Items Get Activities",
					"action": "Get activities from shares",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Update Activities",
					"value": "Shares List Items Update Activities",
					"action": "Update the navigation property activities in shares",
					"description": "Update the navigation property activities in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Activities Get Drive Item",
					"value": "Shares List Items Activities Get Drive Item",
					"action": "Get driveItem from shares",
					"description": "Get driveItem from shares",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Shares List Items Activities Get Drive Item Content",
					"value": "Shares List Items Activities Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Shares List Items Activities Update Drive Item Content",
					"value": "Shares List Items Activities Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Shares List Items Activities Get List Item",
					"value": "Shares List Items Activities Get List Item",
					"action": "Get listItem from shares",
					"description": "Get listItem from shares",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/listItem"
						}
					}
				},
				{
					"name": "Shares List Items Get Analytics",
					"value": "Shares List Items Get Analytics",
					"action": "Get analytics from shares",
					"description": "Analytics about the view activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Shares List Items List Document Set Versions",
					"value": "Shares List Items List Document Set Versions",
					"action": "List documentSetVersions",
					"description": "Get a list of the versions of a document set item in a list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions"
						}
					}
				},
				{
					"name": "Shares List Items Create Document Set Versions",
					"value": "Shares List Items Create Document Set Versions",
					"action": "Create documentSetVersion",
					"description": "Create a new version of a document set item in a list.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions"
						}
					}
				},
				{
					"name": "Shares List Items Delete Document Set Versions",
					"value": "Shares List Items Delete Document Set Versions",
					"action": "Delete navigation property documentSetVersions for shares",
					"description": "Delete navigation property documentSetVersions for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Get Document Set Versions",
					"value": "Shares List Items Get Document Set Versions",
					"action": "Get documentSetVersions from shares",
					"description": "Version information for a document set version created by a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Update Document Set Versions",
					"value": "Shares List Items Update Document Set Versions",
					"action": "Update the navigation property documentSetVersions in shares",
					"description": "Update the navigation property documentSetVersions in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Get Drive Item",
					"value": "Shares List Items Get Drive Item",
					"action": "Get driveItem from shares",
					"description": "For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Shares List Items Get Drive Item Content",
					"value": "Shares List Items Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Shares List Items Update Drive Item Content",
					"value": "Shares List Items Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Shares List Items Delete Fields",
					"value": "Shares List Items Delete Fields",
					"action": "Delete navigation property fields for shares",
					"description": "Delete navigation property fields for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Shares List Items Get Fields",
					"value": "Shares List Items Get Fields",
					"action": "Get fields from shares",
					"description": "The values of the columns set on this list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Shares List Items Update Fields",
					"value": "Shares List Items Update Fields",
					"action": "Update an item in a list",
					"description": "Update the properties on a **[listItem][]**.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Shares List Items List Versions",
					"value": "Shares List Items List Versions",
					"action": "Get versions from shares",
					"description": "The list of previous versions of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Shares List Items Create Versions",
					"value": "Shares List Items Create Versions",
					"action": "Create new navigation property to versions for shares",
					"description": "Create new navigation property to versions for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Shares List Items Delete Versions",
					"value": "Shares List Items Delete Versions",
					"action": "Delete navigation property versions for shares",
					"description": "Delete navigation property versions for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Get Versions",
					"value": "Shares List Items Get Versions",
					"action": "Get versions from shares",
					"description": "The list of previous versions of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Update Versions",
					"value": "Shares List Items Update Versions",
					"action": "Update the navigation property versions in shares",
					"description": "Update the navigation property versions in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Items Versions Delete Fields",
					"value": "Shares List Items Versions Delete Fields",
					"action": "Delete navigation property fields for shares",
					"description": "Delete navigation property fields for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Shares List Items Versions Get Fields",
					"value": "Shares List Items Versions Get Fields",
					"action": "Get fields from shares",
					"description": "A collection of the fields and values for this version of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Shares List Items Versions Update Fields",
					"value": "Shares List Items Versions Update Fields",
					"action": "Update the navigation property fields in shares",
					"description": "Update the navigation property fields in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Shares List List Operations",
					"value": "Shares List List Operations",
					"action": "Get operations from shares",
					"description": "The collection of long running operations for the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/operations"
						}
					}
				},
				{
					"name": "Shares List Create Operations",
					"value": "Shares List Create Operations",
					"action": "Create new navigation property to operations for shares",
					"description": "Create new navigation property to operations for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/operations"
						}
					}
				},
				{
					"name": "Shares List Delete Operations",
					"value": "Shares List Delete Operations",
					"action": "Delete navigation property operations for shares",
					"description": "Delete navigation property operations for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Get Operations",
					"value": "Shares List Get Operations",
					"action": "Get operations from shares",
					"description": "The collection of long running operations for the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Update Operations",
					"value": "Shares List Update Operations",
					"action": "Update the navigation property operations in shares",
					"description": "Update the navigation property operations in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List List Subscriptions",
					"value": "Shares List List Subscriptions",
					"action": "Get subscriptions from shares",
					"description": "The set of subscriptions on the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/subscriptions"
						}
					}
				},
				{
					"name": "Shares List Create Subscriptions",
					"value": "Shares List Create Subscriptions",
					"action": "Create new navigation property to subscriptions for shares",
					"description": "Create new navigation property to subscriptions for shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/subscriptions"
						}
					}
				},
				{
					"name": "Shares List Delete Subscriptions",
					"value": "Shares List Delete Subscriptions",
					"action": "Delete navigation property subscriptions for shares",
					"description": "Delete navigation property subscriptions for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Get Subscriptions",
					"value": "Shares List Get Subscriptions",
					"action": "Get subscriptions from shares",
					"description": "The set of subscriptions on the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Shares List Update Subscriptions",
					"value": "Shares List Update Subscriptions",
					"action": "Update the navigation property subscriptions in shares",
					"description": "Update the navigation property subscriptions in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares Delete List"
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
						"Shares List"
					],
					"operation": [
						"Shares Delete List"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares Get List"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares Get List"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares Get List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares Update List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares Update List"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Delete Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Delete Content Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Delete Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/base",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Delete Column Links"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Delete Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Delete Columns"
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
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/drive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Drive"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Drive"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Drive"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Delete Items"
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
						"Shares List"
					],
					"operation": [
						"Shares List Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Items"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Activities"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Create Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Create Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Document Set Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Fields"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Versions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Delete Fields"
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
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Delete Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Update Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Items Versions Update Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Delete Operations"
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
						"Shares List"
					],
					"operation": [
						"Shares List Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/subscriptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Delete Subscriptions"
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
						"Shares List"
					],
					"operation": [
						"Shares List Delete Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List"
					],
					"operation": [
						"Shares List Update Subscriptions"
					]
				}
			}
		},
];
