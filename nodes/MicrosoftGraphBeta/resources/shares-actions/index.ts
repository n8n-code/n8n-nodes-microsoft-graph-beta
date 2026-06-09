import type { INodeProperties } from 'n8n-workflow';

export const sharesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					]
				}
			},
			"options": [
				{
					"name": "Shares Shared Drive Item List Content Types Add Copy",
					"value": "Shares Shared Drive Item List Content Types Add Copy",
					"action": "Invoke action addCopy",
					"description": "Add a copy of a [content type][contentType] from a [site][site] to a [list][list].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/microsoft.graph.addCopy"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Content Types Add Copy From Content Type Hub",
					"value": "Shares Shared Drive Item List Content Types Add Copy From Content Type Hub",
					"action": "Invoke action addCopyFromContentTypeHub",
					"description": "Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/microsoft.graph.addCopyFromContentTypeHub"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Content Types Content Type Associate With Hub Sites",
					"value": "Shares Shared Drive Item List Content Types Content Type Associate With Hub Sites",
					"action": "Invoke action associateWithHubSites",
					"description": "Associate a [content type][contentType] with a list of hub sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.associateWithHubSites"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Content Types Content Type Copy To Default Content Location",
					"value": "Shares Shared Drive Item List Content Types Content Type Copy To Default Content Location",
					"action": "Invoke action copyToDefaultContentLocation",
					"description": "Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.copyToDefaultContentLocation"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Content Types Content Type Publish",
					"value": "Shares Shared Drive Item List Content Types Content Type Publish",
					"action": "Invoke action publish",
					"description": "Publishes a [contentType][] present in a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Content Types Content Type Unpublish",
					"value": "Shares Shared Drive Item List Content Types Content Type Unpublish",
					"action": "Invoke action unpublish",
					"description": "Unpublish a [contentType][] from a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.unpublish"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Items List Item Document Set Versions Document Set Version Restore",
					"value": "Shares Shared Drive Item List Items List Item Document Set Versions Document Set Version Restore",
					"action": "Invoke action restore",
					"description": "Restore a document set version.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Items List Item Create Link",
					"value": "Shares Shared Drive Item List Items List Item Create Link",
					"action": "Invoke action createLink",
					"description": "Create a sharing link for a listItem. The **createLink** action creates a new sharing link if the specified link type doesn't already exist for the calling application.\nIf a sharing link of the specified type already exists for the app, this action will return the existing sharing link. **listItem** resources inherit sharing permissions from the list the item resides in.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.createLink"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Items List Item Versions List Item Version Restore Version",
					"value": "Shares Shared Drive Item List Items List Item Versions List Item Version Restore Version",
					"action": "Invoke action restoreVersion",
					"description": "Invoke action restoreVersion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/microsoft.graph.restoreVersion"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Subscriptions Subscription Reauthorize",
					"value": "Shares Shared Drive Item List Subscriptions Subscription Reauthorize",
					"action": "Invoke action reauthorize",
					"description": "Invoke action reauthorize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}/microsoft.graph.reauthorize"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item Permission Grant",
					"value": "Shares Shared Drive Item Permission Grant",
					"action": "Invoke action grant",
					"description": "Grant users access to a link represented by a [permission][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/permission/microsoft.graph.grant"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item Permission Revoke Grants",
					"value": "Shares Shared Drive Item Permission Revoke Grants",
					"action": "Invoke action revokeGrants",
					"description": "Revoke access to a [listItem][] or [driveItem][] granted via a sharing link by removing the specified [recipient][] from the link.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/permission/microsoft.graph.revokeGrants"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/microsoft.graph.addCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "contentType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/microsoft.graph.addCopyFromContentTypeHub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "Content Type ID",
			"name": "contentTypeId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentTypeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/microsoft.graph.associateWithHubSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Hub Site Urls",
			"name": "hubSiteUrls",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "hubSiteUrls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Propagate To Existing Lists",
			"name": "propagateToExistingLists",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "propagateToExistingLists",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/microsoft.graph.copyToDefaultContentLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Destination File Name",
			"name": "destinationFileName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationFileName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Source File",
			"name": "sourceFile",
			"type": "json",
			"default": "{\n  \"sharepointIds\": {}\n}",
			"routing": {
				"send": {
					"property": "sourceFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Unpublish"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Document Set Versions Document Set Version Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/microsoft.graph.createLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date Time",
			"name": "expirationDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Retain Inherited Permissions",
			"name": "retainInheritedPermissions",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "retainInheritedPermissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/microsoft.graph.restoreVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Versions List Item Version Restore Version"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/list/subscriptions/{subscription-id}/microsoft.graph.reauthorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item List Subscriptions Subscription Reauthorize"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/permission/microsoft.graph.grant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /shares/{sharedDriveItem-id}/permission/microsoft.graph.revokeGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item Permission Revoke Grants"
					]
				}
			}
		},
		{
			"displayName": "Grantees",
			"name": "grantees",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "grantees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Actions"
					],
					"operation": [
						"Shares Shared Drive Item Permission Revoke Grants"
					]
				}
			}
		},
];
