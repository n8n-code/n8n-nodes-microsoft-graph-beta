import type { INodeProperties } from 'n8n-workflow';

export const drivesDriveItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					]
				}
			},
			"options": [
				{
					"name": "Drives List Bundles",
					"value": "Drives List Bundles",
					"action": "Get bundles from drives",
					"description": "Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/bundles"
						}
					}
				},
				{
					"name": "Drives Get Bundles",
					"value": "Drives Get Bundles",
					"action": "Get bundles from drives",
					"description": "Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/bundles/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Get Bundles Content",
					"value": "Drives Get Bundles Content",
					"action": "Get content for the navigation property bundles from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/bundles/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Update Bundles Content",
					"value": "Drives Update Bundles Content",
					"action": "Update content for the navigation property bundles in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/bundles/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives List Following",
					"value": "Drives List Following",
					"action": "List followed items",
					"description": "List the items that have been followed by the signed in user.\nThis collection includes items that are in the user's drive as well as items they have access to from other drives.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/following"
						}
					}
				},
				{
					"name": "Drives Get Following",
					"value": "Drives Get Following",
					"action": "Get following from drives",
					"description": "The list of items the user is following. Only in OneDrive for Business.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/following/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Get Following Content",
					"value": "Drives Get Following Content",
					"action": "Get content for the navigation property following from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/following/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Update Following Content",
					"value": "Drives Update Following Content",
					"action": "Update content for the navigation property following in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/following/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives List Items",
					"value": "Drives List Items",
					"action": "Get items from drives",
					"description": "All items contained in the drive. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items"
						}
					}
				},
				{
					"name": "Drives Create Items",
					"value": "Drives Create Items",
					"action": "Create new navigation property to items for drives",
					"description": "Create new navigation property to items for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items"
						}
					}
				},
				{
					"name": "Drives Delete Items",
					"value": "Drives Delete Items",
					"action": "Delete navigation property items for drives",
					"description": "Delete navigation property items for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Get Items",
					"value": "Drives Get Items",
					"action": "Get items from drives",
					"description": "All items contained in the drive. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Update Items",
					"value": "Drives Update Items",
					"action": "Update the navigation property items in drives",
					"description": "Update the navigation property items in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items List Activities",
					"value": "Drives Items List Activities",
					"action": "Get activities from drives",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives Items Get Activities",
					"value": "Drives Items Get Activities",
					"action": "Get activities from drives",
					"description": "The list of recent activities that took place on this item.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/activities/{{$parameter[\"itemActivityOLD-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Delete Analytics",
					"value": "Drives Items Delete Analytics",
					"action": "Delete navigation property analytics for drives",
					"description": "Delete navigation property analytics for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Drives Items Get Analytics",
					"value": "Drives Items Get Analytics",
					"action": "Get analytics",
					"description": "Get [itemAnalytics][] about the views that took place under this resource.\nThe **itemAnalytics** resource is a convenient way to get activity stats for `allTime` and the `lastSevenDays`.\nFor a custom time range or interval, use the [getActivitiesByInterval][] API.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Drives Items Update Analytics",
					"value": "Drives Items Update Analytics",
					"action": "Update the navigation property analytics in drives",
					"description": "Update the navigation property analytics in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Drives Items Analytics Get All Time",
					"value": "Drives Items Analytics Get All Time",
					"action": "Get allTime from drives",
					"description": "Get allTime from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/allTime"
						}
					}
				},
				{
					"name": "Drives Items Analytics List Item Activity Stats",
					"value": "Drives Items Analytics List Item Activity Stats",
					"action": "Get itemActivityStats from drives",
					"description": "Get itemActivityStats from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats"
						}
					}
				},
				{
					"name": "Drives Items Analytics Create Item Activity Stats",
					"value": "Drives Items Analytics Create Item Activity Stats",
					"action": "Create new navigation property to itemActivityStats for drives",
					"description": "Create new navigation property to itemActivityStats for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats"
						}
					}
				},
				{
					"name": "Drives Items Analytics Delete Item Activity Stats",
					"value": "Drives Items Analytics Delete Item Activity Stats",
					"action": "Delete navigation property itemActivityStats for drives",
					"description": "Delete navigation property itemActivityStats for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Analytics Get Item Activity Stats",
					"value": "Drives Items Analytics Get Item Activity Stats",
					"action": "Get itemActivityStats from drives",
					"description": "Get itemActivityStats from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Analytics Update Item Activity Stats",
					"value": "Drives Items Analytics Update Item Activity Stats",
					"action": "Update the navigation property itemActivityStats in drives",
					"description": "Update the navigation property itemActivityStats in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats List Activities",
					"value": "Drives Items Analytics Item Activity Stats List Activities",
					"action": "Get activities from drives",
					"description": "Exposes the itemActivities represented in this itemActivityStat resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Create Activities",
					"value": "Drives Items Analytics Item Activity Stats Create Activities",
					"action": "Create new navigation property to activities for drives",
					"description": "Create new navigation property to activities for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Delete Activities",
					"value": "Drives Items Analytics Item Activity Stats Delete Activities",
					"action": "Delete navigation property activities for drives",
					"description": "Delete navigation property activities for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities/{{$parameter[\"itemActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Get Activities",
					"value": "Drives Items Analytics Item Activity Stats Get Activities",
					"action": "Get activities from drives",
					"description": "Exposes the itemActivities represented in this itemActivityStat resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities/{{$parameter[\"itemActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Update Activities",
					"value": "Drives Items Analytics Item Activity Stats Update Activities",
					"action": "Update the navigation property activities in drives",
					"description": "Update the navigation property activities in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities/{{$parameter[\"itemActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Activities Get Drive Item",
					"value": "Drives Items Analytics Item Activity Stats Activities Get Drive Item",
					"action": "Get driveItem from drives",
					"description": "Exposes the driveItem that was the target of this activity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities/{{$parameter[\"itemActivity-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Activities Get Drive Item Content",
					"value": "Drives Items Analytics Item Activity Stats Activities Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities/{{$parameter[\"itemActivity-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives Items Analytics Item Activity Stats Activities Update Drive Item Content",
					"value": "Drives Items Analytics Item Activity Stats Activities Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/itemActivityStats/{{$parameter[\"itemActivityStat-id\"]}}/activities/{{$parameter[\"itemActivity-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Drives Items Analytics Get Last Seven Days",
					"value": "Drives Items Analytics Get Last Seven Days",
					"action": "Get lastSevenDays from drives",
					"description": "Get lastSevenDays from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/analytics/lastSevenDays"
						}
					}
				},
				{
					"name": "Drives Items List Children",
					"value": "Drives Items List Children",
					"action": "List children of a driveItem",
					"description": "Return a collection of DriveItems in the **children** relationship of a DriveItem. DriveItems with a non-null **folder** or **package** facet can have one or more child DriveItems.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/children"
						}
					}
				},
				{
					"name": "Drives Items Create Children",
					"value": "Drives Items Create Children",
					"action": "Create new navigation property to children for drives",
					"description": "Create new navigation property to children for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/children"
						}
					}
				},
				{
					"name": "Drives Items Get Children",
					"value": "Drives Items Get Children",
					"action": "Get children from drives",
					"description": "Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/children/{{$parameter[\"driveItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Get Children Content",
					"value": "Drives Items Get Children Content",
					"action": "Get content for the navigation property children from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/children/{{$parameter[\"driveItem-id1\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Items Update Children Content",
					"value": "Drives Items Update Children Content",
					"action": "Update content for the navigation property children in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/children/{{$parameter[\"driveItem-id1\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Get Items Content",
					"value": "Drives Get Items Content",
					"action": "Get content for the navigation property items from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Update Items Content",
					"value": "Drives Update Items Content",
					"action": "Update content for the navigation property items in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Items Get List Item",
					"value": "Drives Items Get List Item",
					"action": "Get listItem from drives",
					"description": "For drives in SharePoint, the associated document library list item. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/listItem"
						}
					}
				},
				{
					"name": "Drives Items List Permissions",
					"value": "Drives Items List Permissions",
					"action": "List sharing permissions on a driveItem",
					"description": "List the effective sharing permissions on a driveItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions"
						}
					}
				},
				{
					"name": "Drives Items Create Permissions",
					"value": "Drives Items Create Permissions",
					"action": "Create new navigation property to permissions for drives",
					"description": "Create new navigation property to permissions for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions"
						}
					}
				},
				{
					"name": "Drives Items Delete Permissions",
					"value": "Drives Items Delete Permissions",
					"action": "Delete navigation property permissions for drives",
					"description": "Delete navigation property permissions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Get Permissions",
					"value": "Drives Items Get Permissions",
					"action": "Get permissions from drives",
					"description": "The set of permissions for the item. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Update Permissions",
					"value": "Drives Items Update Permissions",
					"action": "Update the navigation property permissions in drives",
					"description": "Update the navigation property permissions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items List Subscriptions",
					"value": "Drives Items List Subscriptions",
					"action": "Get subscriptions from drives",
					"description": "The set of subscriptions on the item. Only supported on the root of a drive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/subscriptions"
						}
					}
				},
				{
					"name": "Drives Items Create Subscriptions",
					"value": "Drives Items Create Subscriptions",
					"action": "Create new navigation property to subscriptions for drives",
					"description": "Create new navigation property to subscriptions for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/subscriptions"
						}
					}
				},
				{
					"name": "Drives Items Delete Subscriptions",
					"value": "Drives Items Delete Subscriptions",
					"action": "Delete navigation property subscriptions for drives",
					"description": "Delete navigation property subscriptions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Get Subscriptions",
					"value": "Drives Items Get Subscriptions",
					"action": "Get subscriptions from drives",
					"description": "The set of subscriptions on the item. Only supported on the root of a drive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Update Subscriptions",
					"value": "Drives Items Update Subscriptions",
					"action": "Update the navigation property subscriptions in drives",
					"description": "Update the navigation property subscriptions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items List Thumbnails",
					"value": "Drives Items List Thumbnails",
					"action": "List thumbnails for a DriveItem",
					"description": "Retrieve a collection of ThumbnailSet resources for a DriveItem resource. A DriveItem can be represented by zero or more ThumbnailSet resources.\nEach **thumbnailSet** can have one or more **thumbnail** objects, which are images that represent the item.\nFor example, a **thumbnailSet** may include **thumbnail** objects, such as common ones including `small`, `medium`, or `large`. There are many ways to work with thumbnails on OneDrive.\nHere are the most common ones:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/thumbnails"
						}
					}
				},
				{
					"name": "Drives Items Create Thumbnails",
					"value": "Drives Items Create Thumbnails",
					"action": "Create new navigation property to thumbnails for drives",
					"description": "Create new navigation property to thumbnails for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/thumbnails"
						}
					}
				},
				{
					"name": "Drives Items Delete Thumbnails",
					"value": "Drives Items Delete Thumbnails",
					"action": "Delete navigation property thumbnails for drives",
					"description": "Delete navigation property thumbnails for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/thumbnails/{{$parameter[\"thumbnailSet-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Get Thumbnails",
					"value": "Drives Items Get Thumbnails",
					"action": "Get thumbnails from drives",
					"description": "Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/thumbnails/{{$parameter[\"thumbnailSet-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Update Thumbnails",
					"value": "Drives Items Update Thumbnails",
					"action": "Update the navigation property thumbnails in drives",
					"description": "Update the navigation property thumbnails in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/thumbnails/{{$parameter[\"thumbnailSet-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items List Versions",
					"value": "Drives Items List Versions",
					"action": "List versions of a driveItem",
					"description": "OneDrive and SharePoint can be configured to retain the history for files.\nDepending on the service and configuration, a new version can be created for each edit, each time the file is saved, manually, or never. Previous versions of a document may be retained for a finite period of time depending on admin settings which may be unique per user or location.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Drives Items Create Versions",
					"value": "Drives Items Create Versions",
					"action": "Create new navigation property to versions for drives",
					"description": "Create new navigation property to versions for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Drives Items Delete Versions",
					"value": "Drives Items Delete Versions",
					"action": "Delete navigation property versions for drives",
					"description": "Delete navigation property versions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions/{{$parameter[\"driveItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Get Versions",
					"value": "Drives Items Get Versions",
					"action": "Get versions from drives",
					"description": "The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions/{{$parameter[\"driveItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Update Versions",
					"value": "Drives Items Update Versions",
					"action": "Update the navigation property versions in drives",
					"description": "Update the navigation property versions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions/{{$parameter[\"driveItemVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Get Versions Content",
					"value": "Drives Items Get Versions Content",
					"action": "Get content for the navigation property versions from drives",
					"description": "Get content for the navigation property versions from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions/{{$parameter[\"driveItemVersion-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Items Update Versions Content",
					"value": "Drives Items Update Versions Content",
					"action": "Update content for the navigation property versions in drives",
					"description": "Update content for the navigation property versions in drives",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions/{{$parameter[\"driveItemVersion-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Items Delete Workbook",
					"value": "Drives Items Delete Workbook",
					"action": "Delete navigation property workbook for drives",
					"description": "Delete navigation property workbook for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook"
						}
					}
				},
				{
					"name": "Drives Items Get Workbook",
					"value": "Drives Items Get Workbook",
					"action": "Get workbook from drives",
					"description": "For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook"
						}
					}
				},
				{
					"name": "Drives Items Update Workbook",
					"value": "Drives Items Update Workbook",
					"action": "Update the navigation property workbook in drives",
					"description": "Update the navigation property workbook in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Application",
					"value": "Drives Items Workbook Delete Application",
					"action": "Delete navigation property application for drives",
					"description": "Delete navigation property application for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/application"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Application",
					"value": "Drives Items Workbook Get Application",
					"action": "Get workbookApplication",
					"description": "Retrieve the properties and relationships of a workbookApplication object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/application"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Application",
					"value": "Drives Items Workbook Update Application",
					"action": "Update the navigation property application in drives",
					"description": "Update the navigation property application in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/application"
						}
					}
				},
				{
					"name": "Drives Items Workbook List Comments",
					"value": "Drives Items Workbook List Comments",
					"action": "Get comments from drives",
					"description": "Get comments from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments"
						}
					}
				},
				{
					"name": "Drives Items Workbook Create Comments",
					"value": "Drives Items Workbook Create Comments",
					"action": "Create new navigation property to comments for drives",
					"description": "Create new navigation property to comments for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Comments",
					"value": "Drives Items Workbook Delete Comments",
					"action": "Delete navigation property comments for drives",
					"description": "Delete navigation property comments for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Comments",
					"value": "Drives Items Workbook Get Comments",
					"action": "Get comments from drives",
					"description": "Get comments from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Comments",
					"value": "Drives Items Workbook Update Comments",
					"action": "Update the navigation property comments in drives",
					"description": "Update the navigation property comments in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Comments List Replies",
					"value": "Drives Items Workbook Comments List Replies",
					"action": "Get replies from drives",
					"description": "Get replies from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Drives Items Workbook Comments Create Replies",
					"value": "Drives Items Workbook Comments Create Replies",
					"action": "Create new navigation property to replies for drives",
					"description": "Create new navigation property to replies for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Drives Items Workbook Comments Delete Replies",
					"value": "Drives Items Workbook Comments Delete Replies",
					"action": "Delete navigation property replies for drives",
					"description": "Delete navigation property replies for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}/replies/{{$parameter[\"workbookCommentReply-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Comments Get Replies",
					"value": "Drives Items Workbook Comments Get Replies",
					"action": "Get replies from drives",
					"description": "Get replies from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}/replies/{{$parameter[\"workbookCommentReply-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Comments Update Replies",
					"value": "Drives Items Workbook Comments Update Replies",
					"action": "Update the navigation property replies in drives",
					"description": "Update the navigation property replies in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/comments/{{$parameter[\"workbookComment-id\"]}}/replies/{{$parameter[\"workbookCommentReply-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Functions",
					"value": "Drives Items Workbook Delete Functions",
					"action": "Delete navigation property functions for drives",
					"description": "Delete navigation property functions for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Functions",
					"value": "Drives Items Workbook Get Functions",
					"action": "Get functions from drives",
					"description": "Get functions from drives",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Functions",
					"value": "Drives Items Workbook Update Functions",
					"action": "Update the navigation property functions in drives",
					"description": "Update the navigation property functions in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions"
						}
					}
				},
				{
					"name": "Drives Items Workbook List Names",
					"value": "Drives Items Workbook List Names",
					"action": "List NamedItemCollection",
					"description": "Retrieve a list of nameditem objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names"
						}
					}
				},
				{
					"name": "Drives Items Workbook Create Names",
					"value": "Drives Items Workbook Create Names",
					"action": "Create new navigation property to names for drives",
					"description": "Create new navigation property to names for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Names",
					"value": "Drives Items Workbook Delete Names",
					"action": "Delete navigation property names for drives",
					"description": "Delete navigation property names for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/{{$parameter[\"workbookNamedItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Names",
					"value": "Drives Items Workbook Get Names",
					"action": "Get names from drives",
					"description": "Represents a collection of workbooks scoped named items (named ranges and constants). Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/{{$parameter[\"workbookNamedItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Names",
					"value": "Drives Items Workbook Update Names",
					"action": "Update the navigation property names in drives",
					"description": "Update the navigation property names in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/{{$parameter[\"workbookNamedItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Names Get Worksheet",
					"value": "Drives Items Workbook Names Get Worksheet",
					"action": "Get worksheet from drives",
					"description": "Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/{{$parameter[\"workbookNamedItem-id\"]}}/worksheet"
						}
					}
				},
				{
					"name": "Drives Items Workbook List Operations",
					"value": "Drives Items Workbook List Operations",
					"action": "Get operations from drives",
					"description": "The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/operations"
						}
					}
				},
				{
					"name": "Drives Items Workbook Create Operations",
					"value": "Drives Items Workbook Create Operations",
					"action": "Create new navigation property to operations for drives",
					"description": "Create new navigation property to operations for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/operations"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Operations",
					"value": "Drives Items Workbook Delete Operations",
					"action": "Delete navigation property operations for drives",
					"description": "Delete navigation property operations for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/operations/{{$parameter[\"workbookOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Operations",
					"value": "Drives Items Workbook Get Operations",
					"action": "Get operations from drives",
					"description": "The status of Workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/operations/{{$parameter[\"workbookOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Operations",
					"value": "Drives Items Workbook Update Operations",
					"action": "Update the navigation property operations in drives",
					"description": "Update the navigation property operations in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/operations/{{$parameter[\"workbookOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook List Tables",
					"value": "Drives Items Workbook List Tables",
					"action": "List tables",
					"description": "Retrieve a list of table objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables"
						}
					}
				},
				{
					"name": "Drives Items Workbook Create Tables",
					"value": "Drives Items Workbook Create Tables",
					"action": "Create new navigation property to tables for drives",
					"description": "Create new navigation property to tables for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Tables",
					"value": "Drives Items Workbook Delete Tables",
					"action": "Delete navigation property tables for drives",
					"description": "Delete navigation property tables for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Tables",
					"value": "Drives Items Workbook Get Tables",
					"action": "Get tables from drives",
					"description": "Represents a collection of tables associated with the workbook. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Tables",
					"value": "Drives Items Workbook Update Tables",
					"action": "Update the navigation property tables in drives",
					"description": "Update the navigation property tables in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables List Columns",
					"value": "Drives Items Workbook Tables List Columns",
					"action": "List TableColumnCollection",
					"description": "Retrieve a list of tablecolumn objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Create Columns",
					"value": "Drives Items Workbook Tables Create Columns",
					"action": "Create TableColumn",
					"description": "Use this API to create a new TableColumn.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Delete Columns",
					"value": "Drives Items Workbook Tables Delete Columns",
					"action": "Delete navigation property columns for drives",
					"description": "Delete navigation property columns for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Get Columns",
					"value": "Drives Items Workbook Tables Get Columns",
					"action": "Get columns from drives",
					"description": "Represents a collection of all the columns in the table. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Update Columns",
					"value": "Drives Items Workbook Tables Update Columns",
					"action": "Update the navigation property columns in drives",
					"description": "Update the navigation property columns in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Columns Delete Filter",
					"value": "Drives Items Workbook Tables Columns Delete Filter",
					"action": "Delete navigation property filter for drives",
					"description": "Delete navigation property filter for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Columns Get Filter",
					"value": "Drives Items Workbook Tables Columns Get Filter",
					"action": "Get filter from drives",
					"description": "Retrieve the filter applied to the column. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Columns Update Filter",
					"value": "Drives Items Workbook Tables Columns Update Filter",
					"action": "Update the navigation property filter in drives",
					"description": "Update the navigation property filter in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables List Rows",
					"value": "Drives Items Workbook Tables List Rows",
					"action": "List TableRowCollection",
					"description": "Retrieve a list of tablerow objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Create Rows",
					"value": "Drives Items Workbook Tables Create Rows",
					"action": "Create tableRow",
					"description": "Add rows to the end of a table.  Note that the API can accept multiple rows data using this API. Adding one row at a time can lead to performance degradation. The recommended approach is to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform a single row add operation. Experiment with the number of rows to determine the ideal number of rows to use in a single API call.  This request might occasionally result in a `504 HTTP` error. The appropriate response to this error is to repeat the request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Delete Rows",
					"value": "Drives Items Workbook Tables Delete Rows",
					"action": "Delete navigation property rows for drives",
					"description": "Delete navigation property rows for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Get Rows",
					"value": "Drives Items Workbook Tables Get Rows",
					"action": "Get rows from drives",
					"description": "Represents a collection of all the rows in the table. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Update Rows",
					"value": "Drives Items Workbook Tables Update Rows",
					"action": "Update the navigation property rows in drives",
					"description": "Update the navigation property rows in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Delete Sort",
					"value": "Drives Items Workbook Tables Delete Sort",
					"action": "Delete navigation property sort for drives",
					"description": "Delete navigation property sort for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/sort"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Get Sort",
					"value": "Drives Items Workbook Tables Get Sort",
					"action": "Get TableSort",
					"description": "Retrieve the properties and relationships of tablesort object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/sort"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Update Sort",
					"value": "Drives Items Workbook Tables Update Sort",
					"action": "Update the navigation property sort in drives",
					"description": "Update the navigation property sort in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/sort"
						}
					}
				},
				{
					"name": "Drives Items Workbook Tables Get Worksheet",
					"value": "Drives Items Workbook Tables Get Worksheet",
					"action": "Get worksheet from drives",
					"description": "The worksheet containing the current table. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/worksheet"
						}
					}
				},
				{
					"name": "Drives Items Workbook List Worksheets",
					"value": "Drives Items Workbook List Worksheets",
					"action": "List worksheets",
					"description": "Retrieve a list of worksheet objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets"
						}
					}
				},
				{
					"name": "Drives Items Workbook Create Worksheets",
					"value": "Drives Items Workbook Create Worksheets",
					"action": "Create new navigation property to worksheets for drives",
					"description": "Create new navigation property to worksheets for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets"
						}
					}
				},
				{
					"name": "Drives Items Workbook Delete Worksheets",
					"value": "Drives Items Workbook Delete Worksheets",
					"action": "Delete navigation property worksheets for drives",
					"description": "Delete navigation property worksheets for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Get Worksheets",
					"value": "Drives Items Workbook Get Worksheets",
					"action": "Get worksheets from drives",
					"description": "Represents a collection of worksheets associated with the workbook. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Update Worksheets",
					"value": "Drives Items Workbook Update Worksheets",
					"action": "Update the navigation property worksheets in drives",
					"description": "Update the navigation property worksheets in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets List Charts",
					"value": "Drives Items Workbook Worksheets List Charts",
					"action": "List charts",
					"description": "Retrieve a list of chart objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Create Charts",
					"value": "Drives Items Workbook Worksheets Create Charts",
					"action": "Create Chart",
					"description": "Use this API to create a new Chart.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Delete Charts",
					"value": "Drives Items Workbook Worksheets Delete Charts",
					"action": "Delete navigation property charts for drives",
					"description": "Delete navigation property charts for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Get Charts",
					"value": "Drives Items Workbook Worksheets Get Charts",
					"action": "Get charts from drives",
					"description": "Returns collection of charts that are part of the worksheet. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Update Charts",
					"value": "Drives Items Workbook Worksheets Update Charts",
					"action": "Update the navigation property charts in drives",
					"description": "Update the navigation property charts in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Delete Axes",
					"value": "Drives Items Workbook Worksheets Charts Delete Axes",
					"action": "Delete navigation property axes for drives",
					"description": "Delete navigation property axes for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Axes",
					"value": "Drives Items Workbook Worksheets Charts Get Axes",
					"action": "Get axes from drives",
					"description": "Represents chart axes. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Update Axes",
					"value": "Drives Items Workbook Worksheets Charts Update Axes",
					"action": "Update the navigation property axes in drives",
					"description": "Update the navigation property axes in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Delete Category Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Delete Category Axis",
					"action": "Delete navigation property categoryAxis for drives",
					"description": "Delete navigation property categoryAxis for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Get Category Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Get Category Axis",
					"action": "Get categoryAxis from drives",
					"description": "Represents the category axis in a chart. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Update Category Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Update Category Axis",
					"action": "Update the navigation property categoryAxis in drives",
					"description": "Update the navigation property categoryAxis in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of a chart object, which includes line and font formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Font",
					"action": "Get workbookChartFont",
					"description": "Retrieve the properties and relationships of chartfont object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Font",
					"action": "Update chartfont",
					"description": "Update the properties of chartfont object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Line",
					"action": "Get ChartLineFormat",
					"description": "Retrieve the properties and relationships of chartlineformat object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Line",
					"action": "Update chartlineformat",
					"description": "Update the properties of chartlineformat object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Major Gridlines",
					"action": "Delete navigation property majorGridlines for drives",
					"description": "Delete navigation property majorGridlines for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Major Gridlines",
					"action": "Get majorGridlines from drives",
					"description": "Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Major Gridlines",
					"action": "Update the navigation property majorGridlines in drives",
					"description": "Update the navigation property majorGridlines in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart gridlines. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Get Line",
					"action": "Get line from drives",
					"description": "Represents chart line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Minor Gridlines",
					"action": "Delete navigation property minorGridlines for drives",
					"description": "Delete navigation property minorGridlines for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Minor Gridlines",
					"action": "Get minorGridlines from drives",
					"description": "Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Minor Gridlines",
					"action": "Update the navigation property minorGridlines in drives",
					"description": "Update the navigation property minorGridlines in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart gridlines. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Get Line",
					"action": "Get line from drives",
					"description": "Represents chart line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Delete Title",
					"action": "Delete navigation property title for drives",
					"description": "Delete navigation property title for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Get Title",
					"action": "Get workbookChartAxisTitle",
					"description": "Retrieve the properties and relationships of chartaxistitle object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Update Title",
					"action": "Update workbookChartAxisTitle",
					"description": "Update the properties of workbookChartAxisTitle object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart axis title. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Delete Series Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Delete Series Axis",
					"action": "Delete navigation property seriesAxis for drives",
					"description": "Delete navigation property seriesAxis for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Get Series Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Get Series Axis",
					"action": "Get seriesAxis from drives",
					"description": "Represents the series axis of a 3-dimensional chart. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Update Series Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Update Series Axis",
					"action": "Update the navigation property seriesAxis in drives",
					"description": "Update the navigation property seriesAxis in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of a chart object, which includes line and font formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Font",
					"action": "Get workbookChartFont",
					"description": "Retrieve the properties and relationships of chartfont object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Font",
					"action": "Update chartfont",
					"description": "Update the properties of chartfont object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Line",
					"action": "Get ChartLineFormat",
					"description": "Retrieve the properties and relationships of chartlineformat object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Line",
					"action": "Update chartlineformat",
					"description": "Update the properties of chartlineformat object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Major Gridlines",
					"action": "Delete navigation property majorGridlines for drives",
					"description": "Delete navigation property majorGridlines for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Major Gridlines",
					"action": "Get majorGridlines from drives",
					"description": "Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Major Gridlines",
					"action": "Update the navigation property majorGridlines in drives",
					"description": "Update the navigation property majorGridlines in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart gridlines. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Get Line",
					"action": "Get line from drives",
					"description": "Represents chart line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Minor Gridlines",
					"action": "Delete navigation property minorGridlines for drives",
					"description": "Delete navigation property minorGridlines for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Minor Gridlines",
					"action": "Get minorGridlines from drives",
					"description": "Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Minor Gridlines",
					"action": "Update the navigation property minorGridlines in drives",
					"description": "Update the navigation property minorGridlines in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart gridlines. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Get Line",
					"action": "Get line from drives",
					"description": "Represents chart line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Delete Title",
					"action": "Delete navigation property title for drives",
					"description": "Delete navigation property title for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Get Title",
					"action": "Get workbookChartAxisTitle",
					"description": "Retrieve the properties and relationships of chartaxistitle object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Update Title",
					"action": "Update workbookChartAxisTitle",
					"description": "Update the properties of workbookChartAxisTitle object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart axis title. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Delete Value Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Delete Value Axis",
					"action": "Delete navigation property valueAxis for drives",
					"description": "Delete navigation property valueAxis for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Get Value Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Get Value Axis",
					"action": "Get valueAxis from drives",
					"description": "Represents the value axis in an axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Update Value Axis",
					"value": "Drives Items Workbook Worksheets Charts Axes Update Value Axis",
					"action": "Update the navigation property valueAxis in drives",
					"description": "Update the navigation property valueAxis in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of a chart object, which includes line and font formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Font",
					"action": "Get workbookChartFont",
					"description": "Retrieve the properties and relationships of chartfont object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Font",
					"action": "Update chartfont",
					"description": "Update the properties of chartfont object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Line",
					"action": "Get ChartLineFormat",
					"description": "Retrieve the properties and relationships of chartlineformat object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Line",
					"action": "Update chartlineformat",
					"description": "Update the properties of chartlineformat object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Major Gridlines",
					"action": "Delete navigation property majorGridlines for drives",
					"description": "Delete navigation property majorGridlines for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Major Gridlines",
					"action": "Get majorGridlines from drives",
					"description": "Returns a gridlines object that represents the major gridlines for the specified axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Major Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Major Gridlines",
					"action": "Update the navigation property majorGridlines in drives",
					"description": "Update the navigation property majorGridlines in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart gridlines. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Get Line",
					"action": "Get line from drives",
					"description": "Represents chart line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Minor Gridlines",
					"action": "Delete navigation property minorGridlines for drives",
					"description": "Delete navigation property minorGridlines for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Minor Gridlines",
					"action": "Get minorGridlines from drives",
					"description": "Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Minor Gridlines",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Minor Gridlines",
					"action": "Update the navigation property minorGridlines in drives",
					"description": "Update the navigation property minorGridlines in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart gridlines. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Get Line",
					"action": "Get line from drives",
					"description": "Represents chart line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Delete Title",
					"action": "Delete navigation property title for drives",
					"description": "Delete navigation property title for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Get Title",
					"action": "Get workbookChartAxisTitle",
					"description": "Retrieve the properties and relationships of chartaxistitle object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Title",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Update Title",
					"action": "Update workbookChartAxisTitle",
					"description": "Update the properties of workbookChartAxisTitle object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Get Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of chart axis title. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Update Format",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes, such as font name, font size, color, etc. of chart axis title object. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Delete Data Labels",
					"value": "Drives Items Workbook Worksheets Charts Delete Data Labels",
					"action": "Delete navigation property dataLabels for drives",
					"description": "Delete navigation property dataLabels for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Data Labels",
					"value": "Drives Items Workbook Worksheets Charts Get Data Labels",
					"action": "Get dataLabels from drives",
					"description": "Represents the datalabels on the chart. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Update Data Labels",
					"value": "Drives Items Workbook Worksheets Charts Update Data Labels",
					"action": "Update the navigation property dataLabels in drives",
					"description": "Update the navigation property dataLabels in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Get Format",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Get Format",
					"action": "Get format from drives",
					"description": "Represents the format of chart data labels, which includes fill and font formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Update Format",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Format Delete Fill",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Format Delete Fill",
					"action": "Delete navigation property fill for drives",
					"description": "Delete navigation property fill for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Format Get Fill",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Format Get Fill",
					"action": "Get fill from drives",
					"description": "Represents the fill format of the current chart data label. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Format Update Fill",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Format Update Fill",
					"action": "Update the navigation property fill in drives",
					"description": "Update the navigation property fill in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes (font name, font size, color, etc.) for a chart data label. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Data Labels Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Data Labels Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Format",
					"value": "Drives Items Workbook Worksheets Charts Get Format",
					"action": "Get format from drives",
					"description": "Encapsulates the format properties for the chart area. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Update Format",
					"value": "Drives Items Workbook Worksheets Charts Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Format Delete Fill",
					"value": "Drives Items Workbook Worksheets Charts Format Delete Fill",
					"action": "Delete navigation property fill for drives",
					"description": "Delete navigation property fill for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Format Get Fill",
					"value": "Drives Items Workbook Worksheets Charts Format Get Fill",
					"action": "Get fill from drives",
					"description": "Represents the fill format of an object, which includes background formatting information. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Format Update Fill",
					"value": "Drives Items Workbook Worksheets Charts Format Update Fill",
					"action": "Update the navigation property fill in drives",
					"description": "Update the navigation property fill in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Delete Legend",
					"value": "Drives Items Workbook Worksheets Charts Delete Legend",
					"action": "Delete navigation property legend for drives",
					"description": "Delete navigation property legend for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Legend",
					"value": "Drives Items Workbook Worksheets Charts Get Legend",
					"action": "Get ChartLegend",
					"description": "Retrieve the properties and relationships of chartlegend object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Update Legend",
					"value": "Drives Items Workbook Worksheets Charts Update Legend",
					"action": "Update chartlegend",
					"description": "Update the properties of chartlegend object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Legend Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Get Format",
					"value": "Drives Items Workbook Worksheets Charts Legend Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Update Format",
					"value": "Drives Items Workbook Worksheets Charts Legend Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Format Delete Fill",
					"value": "Drives Items Workbook Worksheets Charts Legend Format Delete Fill",
					"action": "Delete navigation property fill for drives",
					"description": "Delete navigation property fill for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Format Get Fill",
					"value": "Drives Items Workbook Worksheets Charts Legend Format Get Fill",
					"action": "Get fill from drives",
					"description": "Represents the fill format of an object, which includes background formating information. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Format Update Fill",
					"value": "Drives Items Workbook Worksheets Charts Legend Format Update Fill",
					"action": "Update the navigation property fill in drives",
					"description": "Update the navigation property fill in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Legend Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Legend Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes such as font name, font size, color, etc. of a chart legend. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Legend Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Legend Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts List Series",
					"value": "Drives Items Workbook Worksheets Charts List Series",
					"action": "List series",
					"description": "Retrieve a list of chartseries objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Create Series",
					"value": "Drives Items Workbook Worksheets Charts Create Series",
					"action": "Create ChartSeries",
					"description": "Use this API to create a new ChartSeries.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Delete Series",
					"value": "Drives Items Workbook Worksheets Charts Delete Series",
					"action": "Delete navigation property series for drives",
					"description": "Delete navigation property series for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Series",
					"value": "Drives Items Workbook Worksheets Charts Get Series",
					"action": "Get series from drives",
					"description": "Represents either a single series or collection of series in the chart. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Update Series",
					"value": "Drives Items Workbook Worksheets Charts Update Series",
					"action": "Update the navigation property series in drives",
					"description": "Update the navigation property series in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Series Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Get Format",
					"value": "Drives Items Workbook Worksheets Charts Series Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of a chart series, which includes fill and line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Update Format",
					"value": "Drives Items Workbook Worksheets Charts Series Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Format Delete Fill",
					"value": "Drives Items Workbook Worksheets Charts Series Format Delete Fill",
					"action": "Delete navigation property fill for drives",
					"description": "Delete navigation property fill for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Format Get Fill",
					"value": "Drives Items Workbook Worksheets Charts Series Format Get Fill",
					"action": "Get fill from drives",
					"description": "Represents the fill format of a chart series, which includes background formating information. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Format Update Fill",
					"value": "Drives Items Workbook Worksheets Charts Series Format Update Fill",
					"action": "Update the navigation property fill in drives",
					"description": "Update the navigation property fill in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Format Delete Line",
					"value": "Drives Items Workbook Worksheets Charts Series Format Delete Line",
					"action": "Delete navigation property line for drives",
					"description": "Delete navigation property line for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Format Get Line",
					"value": "Drives Items Workbook Worksheets Charts Series Format Get Line",
					"action": "Get line from drives",
					"description": "Represents line formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Format Update Line",
					"value": "Drives Items Workbook Worksheets Charts Series Format Update Line",
					"action": "Update the navigation property line in drives",
					"description": "Update the navigation property line in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/line"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series List Points",
					"value": "Drives Items Workbook Worksheets Charts Series List Points",
					"action": "List ChartPointsCollection",
					"description": "Retrieve a list of chartpoint objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Create Points",
					"value": "Drives Items Workbook Worksheets Charts Series Create Points",
					"action": "Create ChartPoint",
					"description": "Use this API to create a new ChartPoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Delete Points",
					"value": "Drives Items Workbook Worksheets Charts Series Delete Points",
					"action": "Delete navigation property points for drives",
					"description": "Delete navigation property points for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Get Points",
					"value": "Drives Items Workbook Worksheets Charts Series Get Points",
					"action": "Get points from drives",
					"description": "Represents a collection of all points in the series. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Update Points",
					"value": "Drives Items Workbook Worksheets Charts Series Update Points",
					"action": "Update the navigation property points in drives",
					"description": "Update the navigation property points in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Points Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Series Points Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Points Get Format",
					"value": "Drives Items Workbook Worksheets Charts Series Points Get Format",
					"action": "Get format from drives",
					"description": "Encapsulates the format properties chart point. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Points Update Format",
					"value": "Drives Items Workbook Worksheets Charts Series Points Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Points Format Delete Fill",
					"value": "Drives Items Workbook Worksheets Charts Series Points Format Delete Fill",
					"action": "Delete navigation property fill for drives",
					"description": "Delete navigation property fill for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Points Format Get Fill",
					"value": "Drives Items Workbook Worksheets Charts Series Points Format Get Fill",
					"action": "Get fill from drives",
					"description": "Represents the fill format of a chart, which includes background formating information. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Series Points Format Update Fill",
					"value": "Drives Items Workbook Worksheets Charts Series Points Format Update Fill",
					"action": "Update the navigation property fill in drives",
					"description": "Update the navigation property fill in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Delete Title",
					"value": "Drives Items Workbook Worksheets Charts Delete Title",
					"action": "Delete navigation property title for drives",
					"description": "Delete navigation property title for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Title",
					"value": "Drives Items Workbook Worksheets Charts Get Title",
					"action": "Get ChartTitle",
					"description": "Retrieve the properties and relationships of charttitle object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Update Title",
					"value": "Drives Items Workbook Worksheets Charts Update Title",
					"action": "Update charttitle",
					"description": "Update the properties of charttitle object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Delete Format",
					"value": "Drives Items Workbook Worksheets Charts Title Delete Format",
					"action": "Delete navigation property format for drives",
					"description": "Delete navigation property format for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Get Format",
					"value": "Drives Items Workbook Worksheets Charts Title Get Format",
					"action": "Get format from drives",
					"description": "Represents the formatting of a chart title, which includes fill and font formatting. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Update Format",
					"value": "Drives Items Workbook Worksheets Charts Title Update Format",
					"action": "Update the navigation property format in drives",
					"description": "Update the navigation property format in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Format Delete Fill",
					"value": "Drives Items Workbook Worksheets Charts Title Format Delete Fill",
					"action": "Delete navigation property fill for drives",
					"description": "Delete navigation property fill for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Format Get Fill",
					"value": "Drives Items Workbook Worksheets Charts Title Format Get Fill",
					"action": "Get fill from drives",
					"description": "Represents the fill format of an object, which includes background formatting information. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Format Update Fill",
					"value": "Drives Items Workbook Worksheets Charts Title Format Update Fill",
					"action": "Update the navigation property fill in drives",
					"description": "Update the navigation property fill in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/fill"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Format Delete Font",
					"value": "Drives Items Workbook Worksheets Charts Title Format Delete Font",
					"action": "Delete navigation property font for drives",
					"description": "Delete navigation property font for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Format Get Font",
					"value": "Drives Items Workbook Worksheets Charts Title Format Get Font",
					"action": "Get font from drives",
					"description": "Represents the font attributes (font name, font size, color, etc.) for the current object. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Title Format Update Font",
					"value": "Drives Items Workbook Worksheets Charts Title Format Update Font",
					"action": "Update the navigation property font in drives",
					"description": "Update the navigation property font in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/font"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Charts Get Worksheet",
					"value": "Drives Items Workbook Worksheets Charts Get Worksheet",
					"action": "Get worksheet from drives",
					"description": "The worksheet containing the current chart. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/worksheet"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets List Names",
					"value": "Drives Items Workbook Worksheets List Names",
					"action": "List names",
					"description": "Retrieve a list of named item associated with the worksheet. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Create Names",
					"value": "Drives Items Workbook Worksheets Create Names",
					"action": "Create new navigation property to names for drives",
					"description": "Create new navigation property to names for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Delete Names",
					"value": "Drives Items Workbook Worksheets Delete Names",
					"action": "Delete navigation property names for drives",
					"description": "Delete navigation property names for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/{{$parameter[\"workbookNamedItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Get Names",
					"value": "Drives Items Workbook Worksheets Get Names",
					"action": "Get names from drives",
					"description": "Returns collection of names that are associated with the worksheet. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/{{$parameter[\"workbookNamedItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Update Names",
					"value": "Drives Items Workbook Worksheets Update Names",
					"action": "Update the navigation property names in drives",
					"description": "Update the navigation property names in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/{{$parameter[\"workbookNamedItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Names Get Worksheet",
					"value": "Drives Items Workbook Worksheets Names Get Worksheet",
					"action": "Get worksheet from drives",
					"description": "Returns the worksheet on which the named item is scoped to. Available only if the item is scoped to the worksheet. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/{{$parameter[\"workbookNamedItem-id\"]}}/worksheet"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets List Pivot Tables",
					"value": "Drives Items Workbook Worksheets List Pivot Tables",
					"action": "Get pivotTables from drives",
					"description": "Collection of PivotTables that are part of the worksheet.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Create Pivot Tables",
					"value": "Drives Items Workbook Worksheets Create Pivot Tables",
					"action": "Create new navigation property to pivotTables for drives",
					"description": "Create new navigation property to pivotTables for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Delete Pivot Tables",
					"value": "Drives Items Workbook Worksheets Delete Pivot Tables",
					"action": "Delete navigation property pivotTables for drives",
					"description": "Delete navigation property pivotTables for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables/{{$parameter[\"workbookPivotTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Get Pivot Tables",
					"value": "Drives Items Workbook Worksheets Get Pivot Tables",
					"action": "Get pivotTables from drives",
					"description": "Collection of PivotTables that are part of the worksheet.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables/{{$parameter[\"workbookPivotTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Update Pivot Tables",
					"value": "Drives Items Workbook Worksheets Update Pivot Tables",
					"action": "Update the navigation property pivotTables in drives",
					"description": "Update the navigation property pivotTables in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables/{{$parameter[\"workbookPivotTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Pivot Tables Get Worksheet",
					"value": "Drives Items Workbook Worksheets Pivot Tables Get Worksheet",
					"action": "Get worksheet from drives",
					"description": "The worksheet containing the current PivotTable. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables/{{$parameter[\"workbookPivotTable-id\"]}}/worksheet"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Delete Protection",
					"value": "Drives Items Workbook Worksheets Delete Protection",
					"action": "Delete navigation property protection for drives",
					"description": "Delete navigation property protection for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/protection"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Get Protection",
					"value": "Drives Items Workbook Worksheets Get Protection",
					"action": "Get workbookWorksheetProtection",
					"description": "Retrieve the properties and relationships of workbookWorksheetProtection object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/protection"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Update Protection",
					"value": "Drives Items Workbook Worksheets Update Protection",
					"action": "Update the navigation property protection in drives",
					"description": "Update the navigation property protection in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/protection"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets List Tables",
					"value": "Drives Items Workbook Worksheets List Tables",
					"action": "List tables",
					"description": "Retrieve a list of table objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Create Tables",
					"value": "Drives Items Workbook Worksheets Create Tables",
					"action": "Create new navigation property to tables for drives",
					"description": "Create new navigation property to tables for drives",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Delete Tables",
					"value": "Drives Items Workbook Worksheets Delete Tables",
					"action": "Delete navigation property tables for drives",
					"description": "Delete navigation property tables for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Get Tables",
					"value": "Drives Items Workbook Worksheets Get Tables",
					"action": "Get tables from drives",
					"description": "Collection of tables that are part of the worksheet. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Update Tables",
					"value": "Drives Items Workbook Worksheets Update Tables",
					"action": "Update the navigation property tables in drives",
					"description": "Update the navigation property tables in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables List Columns",
					"value": "Drives Items Workbook Worksheets Tables List Columns",
					"action": "List TableColumnCollection",
					"description": "Retrieve a list of tablecolumn objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Create Columns",
					"value": "Drives Items Workbook Worksheets Tables Create Columns",
					"action": "Create TableColumn",
					"description": "Use this API to create a new TableColumn.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Delete Columns",
					"value": "Drives Items Workbook Worksheets Tables Delete Columns",
					"action": "Delete navigation property columns for drives",
					"description": "Delete navigation property columns for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Get Columns",
					"value": "Drives Items Workbook Worksheets Tables Get Columns",
					"action": "Get columns from drives",
					"description": "Represents a collection of all the columns in the table. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Update Columns",
					"value": "Drives Items Workbook Worksheets Tables Update Columns",
					"action": "Update the navigation property columns in drives",
					"description": "Update the navigation property columns in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Columns Delete Filter",
					"value": "Drives Items Workbook Worksheets Tables Columns Delete Filter",
					"action": "Delete navigation property filter for drives",
					"description": "Delete navigation property filter for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Columns Get Filter",
					"value": "Drives Items Workbook Worksheets Tables Columns Get Filter",
					"action": "Get filter from drives",
					"description": "Retrieve the filter applied to the column. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Columns Update Filter",
					"value": "Drives Items Workbook Worksheets Tables Columns Update Filter",
					"action": "Update the navigation property filter in drives",
					"description": "Update the navigation property filter in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables List Rows",
					"value": "Drives Items Workbook Worksheets Tables List Rows",
					"action": "List TableRowCollection",
					"description": "Retrieve a list of tablerow objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Create Rows",
					"value": "Drives Items Workbook Worksheets Tables Create Rows",
					"action": "Create tableRow",
					"description": "Add rows to the end of a table.  Note that the API can accept multiple rows data using this API. Adding one row at a time can lead to performance degradation. The recommended approach is to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform a single row add operation. Experiment with the number of rows to determine the ideal number of rows to use in a single API call.  This request might occasionally result in a `504 HTTP` error. The appropriate response to this error is to repeat the request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Delete Rows",
					"value": "Drives Items Workbook Worksheets Tables Delete Rows",
					"action": "Delete navigation property rows for drives",
					"description": "Delete navigation property rows for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Get Rows",
					"value": "Drives Items Workbook Worksheets Tables Get Rows",
					"action": "Get rows from drives",
					"description": "Represents a collection of all the rows in the table. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Update Rows",
					"value": "Drives Items Workbook Worksheets Tables Update Rows",
					"action": "Update the navigation property rows in drives",
					"description": "Update the navigation property rows in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/{{$parameter[\"workbookTableRow-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Delete Sort",
					"value": "Drives Items Workbook Worksheets Tables Delete Sort",
					"action": "Delete navigation property sort for drives",
					"description": "Delete navigation property sort for drives",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/sort"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Get Sort",
					"value": "Drives Items Workbook Worksheets Tables Get Sort",
					"action": "Get TableSort",
					"description": "Retrieve the properties and relationships of tablesort object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/sort"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Update Sort",
					"value": "Drives Items Workbook Worksheets Tables Update Sort",
					"action": "Update the navigation property sort in drives",
					"description": "Update the navigation property sort in drives",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/sort"
						}
					}
				},
				{
					"name": "Drives Items Workbook Worksheets Tables Get Worksheet",
					"value": "Drives Items Workbook Worksheets Tables Get Worksheet",
					"action": "Get worksheet from drives",
					"description": "The worksheet containing the current table. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/worksheet"
						}
					}
				},
				{
					"name": "Drives Get Root",
					"value": "Drives Get Root",
					"action": "Get driveItem",
					"description": "Retrieve the metadata for a driveItem in a drive by file system path or ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/root"
						}
					}
				},
				{
					"name": "Drives Get Root Content",
					"value": "Drives Get Root Content",
					"action": "Get content for the navigation property root from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/root/content"
						}
					}
				},
				{
					"name": "Drives Update Root Content",
					"value": "Drives Update Root Content",
					"action": "Update content for the navigation property root in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/root/content"
						}
					}
				},
				{
					"name": "Drives List Special",
					"value": "Drives List Special",
					"action": "Get special from drives",
					"description": "Collection of common folders available in OneDrive. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/special"
						}
					}
				},
				{
					"name": "Drives Get Special",
					"value": "Drives Get Special",
					"action": "Get special from drives",
					"description": "Collection of common folders available in OneDrive. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/special/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Drives Get Special Content",
					"value": "Drives Get Special Content",
					"action": "Get content for the navigation property special from drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/special/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Drives Update Special Content",
					"value": "Drives Update Special Content",
					"action": "Update content for the navigation property special in drives",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/special/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /drives/{drive-id}/bundles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Bundles"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/bundles/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Bundles"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Bundles"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Bundles"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/bundles/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Bundles Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/bundles/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Bundles Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/bundles/{driveItem-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Bundles Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Following"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/following/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Following"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Following"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Following"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/following/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Following Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/following/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Following Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/following/{driveItem-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Following Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Delete Items"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Items"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Items"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Items"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/activities/{itemActivityOLD-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Analytics"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Analytics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/analytics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/allTime",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get All Time"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get All Time"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get All Time"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics List Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Create Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Create Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Delete Item Activity Stats"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Delete Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Update Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Update Item Activity Stats"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Delete Activities"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Get Activities"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Activities Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Activities Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/analytics/itemActivityStats/{itemActivityStat-id}/activities/{itemActivity-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Item Activity Stats Activities Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/analytics/lastSevenDays",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get Last Seven Days"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get Last Seven Days"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Analytics Get Last Seven Days"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Children"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/children",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Children"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/children<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Children"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Children"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Children"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Children"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Children Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Children Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/children/{driveItem-id1}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Children Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Items Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Items Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Items Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/listItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get List Item"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get List Item"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Permissions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Permissions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/permissions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Permissions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/permissions/{permission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Permissions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Permissions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/permissions/{permission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Permissions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Permissions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Permissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/permissions/{permission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Permissions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/permissions/{permission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Permissions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/subscriptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Subscriptions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/thumbnails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/thumbnails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/thumbnails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Thumbnails"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/thumbnails/{thumbnailSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Thumbnails"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Versions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Versions Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Versions Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Versions Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Workbook"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Delete Workbook"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Workbook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Workbook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Get Workbook"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Workbook"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Update Workbook"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Application"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Application"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Application"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Application"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Application"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/application<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Application"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Comments"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Comments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Comments"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Comments"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Comments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Comments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Comments"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Delete Replies"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Get Replies"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Get Replies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/comments/{workbookComment-id}/replies/{workbookCommentReply-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Comments Update Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Functions"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Functions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Functions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Functions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Functions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Functions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/functions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Functions"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Names"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Names"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/names<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Names"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Names"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Names"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Names"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Names"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/names/{workbookNamedItem-id}/worksheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Names Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Names Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Names Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Operations"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Operations"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Operations"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/operations/{workbookOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Tables"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Tables"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Tables"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Tables"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Tables"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Tables"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Tables"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Tables"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Tables"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Delete Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Update Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Delete Filter"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Delete Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Get Filter"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Get Filter"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Get Filter"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Update Filter"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Columns Update Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables List Rows"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Create Rows"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Create Rows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Delete Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Delete Rows"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Rows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Rows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Rows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Update Rows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/{workbookTableRow-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Update Rows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Delete Sort"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Delete Sort"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Sort"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Sort"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Sort"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Update Sort"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Update Sort"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/worksheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook List Worksheets"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Worksheets"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Create Worksheets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Worksheets"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Delete Worksheets"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Worksheets"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Worksheets"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Get Worksheets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Worksheets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Update Worksheets"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Charts"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Charts"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Charts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Charts"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Charts"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Charts"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Charts"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Charts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Charts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Charts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Axes"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Axes"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Axes"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Axes"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Axes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Axes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Axes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Delete Category Axis"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Delete Category Axis"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Category Axis"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Category Axis"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Category Axis"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Update Category Axis"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Update Category Axis"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Major Gridlines"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Major Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Minor Gridlines"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Minor Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Title"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Delete Title"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Update Title"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/title/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Category Axis Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Delete Series Axis"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Delete Series Axis"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Series Axis"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Series Axis"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Series Axis"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Update Series Axis"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Update Series Axis"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Major Gridlines"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Major Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Minor Gridlines"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Minor Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Title"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Delete Title"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Update Title"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/title/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Series Axis Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Delete Value Axis"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Delete Value Axis"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Value Axis"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Value Axis"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Get Value Axis"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Update Value Axis"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Update Value Axis"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Major Gridlines"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Major Gridlines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Major Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Minor Gridlines"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Minor Gridlines"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Minor Gridlines Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Title"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Delete Title"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Get Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Update Title"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/title/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Axes Value Axis Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Data Labels"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Data Labels"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Data Labels"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Data Labels"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Data Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Data Labels"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Data Labels"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Delete Fill"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Delete Fill"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/fill<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Data Labels Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Delete Fill"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Delete Fill"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/fill<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Legend"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Legend"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Legend"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Legend"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Legend"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Legend"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Legend"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Delete Fill"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Delete Fill"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/fill<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Legend Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts List Series"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Create Series"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Create Series"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Series"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Series"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Series"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Series"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Series"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Series"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Series"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Delete Fill"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Delete Fill"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/fill<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Delete Line"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Delete Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Get Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/line",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/line<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Format Update Line"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series List Points"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Create Points"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Create Points"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Delete Points"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Delete Points"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Get Points"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Get Points"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Get Points"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Update Points"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Update Points"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Delete Fill"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Delete Fill"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format/fill<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Series Points Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Title"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Delete Title"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Title"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Title"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Title"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Update Title"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Delete Format"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Delete Format"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Get Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Update Format"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Delete Fill"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Delete Fill"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Get Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/fill",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/fill<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Update Fill"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Delete Font"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Delete Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Get Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/font",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/font<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Title Format Update Font"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/worksheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Charts Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Names"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Names"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Names"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/{workbookNamedItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Names"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Names"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/{workbookNamedItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Names"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Names"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/{workbookNamedItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Names"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/{workbookNamedItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Names"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/{workbookNamedItem-id}/worksheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Names Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Names Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Names Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/{workbookPivotTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Pivot Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/{workbookPivotTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/{workbookPivotTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/{workbookPivotTable-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Pivot Tables"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/{workbookPivotTable-id}/worksheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Pivot Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Pivot Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Pivot Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Protection"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Protection"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Protection"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Protection"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets List Tables"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Tables"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Create Tables"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Tables"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Delete Tables"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Tables"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Tables"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Get Tables"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Tables"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Update Tables"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Delete Columns"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Columns"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Update Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Delete Filter"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Delete Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Get Filter"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Get Filter"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Get Filter"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Update Filter"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Columns Update Filter"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables List Rows"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Create Rows"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Create Rows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/{workbookTableRow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Delete Rows"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Delete Rows"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/{workbookTableRow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Rows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Rows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Rows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/{workbookTableRow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Update Rows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/{workbookTableRow-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Update Rows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Delete Sort"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Delete Sort"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Sort"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Sort"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Sort"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Update Sort"
					]
				}
			}
		},
		{
			"displayName": "PATCH /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Update Sort"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/worksheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Items Workbook Worksheets Tables Get Worksheet"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/root",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Root"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Root"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Root"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/root/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Root Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/root/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Root Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/root/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Root Content"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/special",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
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
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives List Special"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/special/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Special"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Special"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Special"
					]
				}
			}
		},
		{
			"displayName": "GET /drives/{drive-id}/special/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Get Special Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/special/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Special Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /drives/{drive-id}/special/{driveItem-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Drive Item"
					],
					"operation": [
						"Drives Update Special Content"
					]
				}
			}
		},
];
