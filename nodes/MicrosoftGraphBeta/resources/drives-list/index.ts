import type { INodeProperties } from 'n8n-workflow';

export const drivesListDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					]
				}
			},
			"options": [
				{
					"name": "Drives Delete List",
					"value": "Drives Delete List",
					"action": "Delete navigation property list for drives",
					"description": "Delete navigation property list for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list"
						}
					}
				},
				{
					"name": "Drives Get List",
					"value": "Drives Get List",
					"action": "Get list from drives",
					"description": "For drives in SharePoint, the underlying document library list. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list"
						}
					}
				},
				{
					"name": "Drives Update List",
					"value": "Drives Update List",
					"action": "Update the navigation property list in drives",
					"description": "Update the navigation property list in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list"
						}
					}
				},
				{
					"name": "Drives List List Activities",
					"value": "Drives List List Activities",
					"action": "Get activities from drives",
					"description": "The recent activities that took place within this list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/activities"
						}
					}
				},
				{
					"name": "Drives List Create Activities",
					"value": "Drives List Create Activities",
					"action": "Create new navigation property to activities for drives",
					"description": "Create new navigation property to activities for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/activities"
						}
					}
				},
				{
					"name": "Drives List List Columns",
					"value": "Drives List List Columns",
					"action": "List columns in a list",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [list][list].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/columns"
						}
					}
				},
				{
					"name": "Drives List Create Columns",
					"value": "Drives List Create Columns",
					"action": "Create columnDefinition",
					"description": "Create a column for a [list][list] with a request that specifies a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/columns"
						}
					}
				},
				{
					"name": "Drives List Delete Columns",
					"value": "Drives List Delete Columns",
					"action": "Delete navigation property columns for drives",
					"description": "Delete navigation property columns for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Get Columns",
					"value": "Drives List Get Columns",
					"action": "Get columns from drives",
					"description": "Get columns from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Update Columns",
					"value": "Drives List Update Columns",
					"action": "Update the navigation property columns in drives",
					"description": "Update the navigation property columns in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Columns Get Source Column",
					"value": "Drives List Columns Get Source Column",
					"action": "Get sourceColumn from drives",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				},
				{
					"name": "Drives List List Content Types",
					"value": "Drives List List Content Types",
					"action": "List contentTypes in a list",
					"description": "Get the collection of [contentType][contentType] resources in a [list][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes"
						}
					}
				},
				{
					"name": "Drives List Create Content Types",
					"value": "Drives List Create Content Types",
					"action": "Create new navigation property to contentTypes for drives",
					"description": "Create new navigation property to contentTypes for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes"
						}
					}
				},
				{
					"name": "Drives List Delete Content Types",
					"value": "Drives List Delete Content Types",
					"action": "Delete navigation property contentTypes for drives",
					"description": "Delete navigation property contentTypes for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Get Content Types",
					"value": "Drives List Get Content Types",
					"action": "Get contentTypes from drives",
					"description": "Get contentTypes from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Update Content Types",
					"value": "Drives List Update Content Types",
					"action": "Update the navigation property contentTypes in drives",
					"description": "Update the navigation property contentTypes in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types Get Base",
					"value": "Drives List Content Types Get Base",
					"action": "Get base from drives",
					"description": "Parent contentType from which this content type is derived.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/base"
						}
					}
				},
				{
					"name": "Drives List Content Types List Base Types",
					"value": "Drives List Content Types List Base Types",
					"action": "Get baseTypes from drives",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes"
						}
					}
				},
				{
					"name": "Drives List Content Types Get Base Types",
					"value": "Drives List Content Types Get Base Types",
					"action": "Get baseTypes from drives",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes/{{$parameter[\"contentType-id1\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types List Column Links",
					"value": "Drives List Content Types List Column Links",
					"action": "Get columnLinks from drives",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Drives List Content Types Create Column Links",
					"value": "Drives List Content Types Create Column Links",
					"action": "Create new navigation property to columnLinks for drives",
					"description": "Create new navigation property to columnLinks for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Drives List Content Types Delete Column Links",
					"value": "Drives List Content Types Delete Column Links",
					"action": "Delete navigation property columnLinks for drives",
					"description": "Delete navigation property columnLinks for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types Get Column Links",
					"value": "Drives List Content Types Get Column Links",
					"action": "Get columnLinks from drives",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types Update Column Links",
					"value": "Drives List Content Types Update Column Links",
					"action": "Update the navigation property columnLinks in drives",
					"description": "Update the navigation property columnLinks in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types List Column Positions",
					"value": "Drives List Content Types List Column Positions",
					"action": "Get columnPositions from drives",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions"
						}
					}
				},
				{
					"name": "Drives List Content Types Get Column Positions",
					"value": "Drives List Content Types Get Column Positions",
					"action": "Get columnPositions from drives",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types List Columns",
					"value": "Drives List Content Types List Columns",
					"action": "List columns in a content type",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [content type][contentType].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Drives List Content Types Create Columns",
					"value": "Drives List Content Types Create Columns",
					"action": "Create columnDefinition for a content type",
					"description": "Add a column to a [content type][contentType] in a site or list by specifying a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Drives List Content Types Delete Columns",
					"value": "Drives List Content Types Delete Columns",
					"action": "Delete navigation property columns for drives",
					"description": "Delete navigation property columns for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types Get Columns",
					"value": "Drives List Content Types Get Columns",
					"action": "Get columns from drives",
					"description": "The collection of column definitions for this contentType.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types Update Columns",
					"value": "Drives List Content Types Update Columns",
					"action": "Update the navigation property columns in drives",
					"description": "Update the navigation property columns in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Content Types Columns Get Source Column",
					"value": "Drives List Content Types Columns Get Source Column",
					"action": "Get sourceColumn from drives",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				},
				{
					"name": "Drives List Get Drive",
					"value": "Drives List Get Drive",
					"action": "Get drive from drives",
					"description": "Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/drive"
						}
					}
				},
				{
					"name": "Drives List List Items",
					"value": "Drives List List Items",
					"action": "Enumerate items in a list",
					"description": "Get the collection of [items][item] in a [list][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items"
						}
					}
				},
				{
					"name": "Drives List Create Items",
					"value": "Drives List Create Items",
					"action": "Create a new item in a list",
					"description": "Create a new [listItem][] in a [list][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items"
						}
					}
				},
				{
					"name": "Drives List Delete Items",
					"value": "Drives List Delete Items",
					"action": "Delete navigation property items for drives",
					"description": "Delete navigation property items for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Get Items",
					"value": "Drives List Get Items",
					"action": "Get items from drives",
					"description": "All items contained in the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Update Items",
					"value": "Drives List Update Items",
					"action": "Update the navigation property items in drives",
					"description": "Update the navigation property items in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items List Activities",
					"value": "Drives List Items List Activities",
					"action": "Get activities from drives",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives List Items Create Activities",
					"value": "Drives List Items Create Activities",
					"action": "Create new navigation property to activities for drives",
					"description": "Create new navigation property to activities for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives List Items Delete Activities",
					"value": "Drives List Items Delete Activities",
					"action": "Delete navigation property activities for drives",
					"description": "Delete navigation property activities for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Get Activities",
					"value": "Drives List Items Get Activities",
					"action": "Get activities from drives",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Update Activities",
					"value": "Drives List Items Update Activities",
					"action": "Update the navigation property activities in drives",
					"description": "Update the navigation property activities in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Activities Get Drive Item",
					"value": "Drives List Items Activities Get Drive Item",
					"action": "Get driveItem from drives",
					"description": "Get driveItem from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Drives List Items Activities Get Drive Item Content",
					"value": "Drives List Items Activities Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives List Items Activities Update Drive Item Content",
					"value": "Drives List Items Activities Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives List Items Activities Get List Item",
					"value": "Drives List Items Activities Get List Item",
					"action": "Get listItem from drives",
					"description": "Get listItem from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}/listItem"
						}
					}
				},
				{
					"name": "Drives List Items Get Analytics",
					"value": "Drives List Items Get Analytics",
					"action": "Get analytics from drives",
					"description": "Analytics about the view activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Drives List Items List Document Set Versions",
					"value": "Drives List Items List Document Set Versions",
					"action": "List documentSetVersions",
					"description": "Get a list of the versions of a document set item in a list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions"
						}
					}
				},
				{
					"name": "Drives List Items Create Document Set Versions",
					"value": "Drives List Items Create Document Set Versions",
					"action": "Create documentSetVersion",
					"description": "Create a new version of a document set item in a list.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions"
						}
					}
				},
				{
					"name": "Drives List Items Delete Document Set Versions",
					"value": "Drives List Items Delete Document Set Versions",
					"action": "Delete navigation property documentSetVersions for drives",
					"description": "Delete navigation property documentSetVersions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Get Document Set Versions",
					"value": "Drives List Items Get Document Set Versions",
					"action": "Get documentSetVersions from drives",
					"description": "Version information for a document set version created by a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Update Document Set Versions",
					"value": "Drives List Items Update Document Set Versions",
					"action": "Update the navigation property documentSetVersions in drives",
					"description": "Update the navigation property documentSetVersions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Get Drive Item",
					"value": "Drives List Items Get Drive Item",
					"action": "Get driveItem from drives",
					"description": "For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Drives List Items Get Drive Item Content",
					"value": "Drives List Items Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives List Items Update Drive Item Content",
					"value": "Drives List Items Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives List Items Delete Fields",
					"value": "Drives List Items Delete Fields",
					"action": "Delete navigation property fields for drives",
					"description": "Delete navigation property fields for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Drives List Items Get Fields",
					"value": "Drives List Items Get Fields",
					"action": "Get fields from drives",
					"description": "The values of the columns set on this list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Drives List Items Update Fields",
					"value": "Drives List Items Update Fields",
					"action": "Update an item in a list",
					"description": "Update the properties on a **[listItem][]**.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Drives List Items List Versions",
					"value": "Drives List Items List Versions",
					"action": "Get versions from drives",
					"description": "The list of previous versions of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Drives List Items Create Versions",
					"value": "Drives List Items Create Versions",
					"action": "Create new navigation property to versions for drives",
					"description": "Create new navigation property to versions for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Drives List Items Delete Versions",
					"value": "Drives List Items Delete Versions",
					"action": "Delete navigation property versions for drives",
					"description": "Delete navigation property versions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Get Versions",
					"value": "Drives List Items Get Versions",
					"action": "Get versions from drives",
					"description": "The list of previous versions of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Update Versions",
					"value": "Drives List Items Update Versions",
					"action": "Update the navigation property versions in drives",
					"description": "Update the navigation property versions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Items Versions Delete Fields",
					"value": "Drives List Items Versions Delete Fields",
					"action": "Delete navigation property fields for drives",
					"description": "Delete navigation property fields for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Drives List Items Versions Get Fields",
					"value": "Drives List Items Versions Get Fields",
					"action": "Get fields from drives",
					"description": "A collection of the fields and values for this version of the list item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Drives List Items Versions Update Fields",
					"value": "Drives List Items Versions Update Fields",
					"action": "Update the navigation property fields in drives",
					"description": "Update the navigation property fields in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/fields"
						}
					}
				},
				{
					"name": "Drives List List Operations",
					"value": "Drives List List Operations",
					"action": "Get operations from drives",
					"description": "The collection of long running operations for the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/operations"
						}
					}
				},
				{
					"name": "Drives List Create Operations",
					"value": "Drives List Create Operations",
					"action": "Create new navigation property to operations for drives",
					"description": "Create new navigation property to operations for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/operations"
						}
					}
				},
				{
					"name": "Drives List Delete Operations",
					"value": "Drives List Delete Operations",
					"action": "Delete navigation property operations for drives",
					"description": "Delete navigation property operations for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Get Operations",
					"value": "Drives List Get Operations",
					"action": "Get operations from drives",
					"description": "The collection of long running operations for the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Update Operations",
					"value": "Drives List Update Operations",
					"action": "Update the navigation property operations in drives",
					"description": "Update the navigation property operations in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/operations/{{$parameter[\"richLongRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List List Subscriptions",
					"value": "Drives List List Subscriptions",
					"action": "Get subscriptions from drives",
					"description": "The set of subscriptions on the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/subscriptions"
						}
					}
				},
				{
					"name": "Drives List Create Subscriptions",
					"value": "Drives List Create Subscriptions",
					"action": "Create new navigation property to subscriptions for drives",
					"description": "Create new navigation property to subscriptions for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/subscriptions"
						}
					}
				},
				{
					"name": "Drives List Delete Subscriptions",
					"value": "Drives List Delete Subscriptions",
					"action": "Delete navigation property subscriptions for drives",
					"description": "Delete navigation property subscriptions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Get Subscriptions",
					"value": "Drives List Get Subscriptions",
					"action": "Get subscriptions from drives",
					"description": "The set of subscriptions on the list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Drives List Update Subscriptions",
					"value": "Drives List Update Subscriptions",
					"action": "Update the navigation property subscriptions in drives",
					"description": "Update the navigation property subscriptions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives Delete List"
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
						"Drives List"
					],
					"operation": [
						"Drives Delete List"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives Get List"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives Get List"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives Get List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives Update List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives Update List"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Delete Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Delete Content Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Delete Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/base",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/baseTypes/{contentType-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Delete Column Links"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Delete Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columnLinks/{columnLink-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Delete Columns"
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
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Content Types Columns Get Source Column"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/drive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Drive"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Drive"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Drive"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Delete Items"
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
						"Drives List"
					],
					"operation": [
						"Drives List Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Items"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Activities"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Activities Get List Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Create Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Create Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Document Set Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Document Set Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/list/items/{listItem-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Fields"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/fields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Versions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Delete Fields"
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
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Delete Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Get Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Update Fields"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/fields<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Items Versions Update Fields"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Delete Operations"
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
						"Drives List"
					],
					"operation": [
						"Drives List Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/operations/{richLongRunningOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/subscriptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/list/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Delete Subscriptions"
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
						"Drives List"
					],
					"operation": [
						"Drives List Delete Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/list/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/list/subscriptions/{subscription-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives List"
					],
					"operation": [
						"Drives List Update Subscriptions"
					]
				}
			}
		},
];
