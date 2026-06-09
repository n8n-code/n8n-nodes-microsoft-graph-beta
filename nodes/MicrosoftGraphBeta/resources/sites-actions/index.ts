import type { INodeProperties } from 'n8n-workflow';

export const sitesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					]
				}
			},
			"options": [
				{
					"name": "Sites Add",
					"value": "Sites Add",
					"action": "Invoke action add",
					"description": "Follow a user's site or multiple sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Sites Remove",
					"value": "Sites Remove",
					"action": "Invoke action remove",
					"description": "Unfollow a user's site or multiple sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/microsoft.graph.remove"
						}
					}
				},
				{
					"name": "Sites Site Content Types Add Copy",
					"value": "Sites Site Content Types Add Copy",
					"action": "Invoke action addCopy",
					"description": "Add a copy of a [content type][contentType] from a [site][site] to a [list][list].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/microsoft.graph.addCopy"
						}
					}
				},
				{
					"name": "Sites Site Content Types Add Copy From Content Type Hub",
					"value": "Sites Site Content Types Add Copy From Content Type Hub",
					"action": "Invoke action addCopyFromContentTypeHub",
					"description": "Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/microsoft.graph.addCopyFromContentTypeHub"
						}
					}
				},
				{
					"name": "Sites Site Content Types Content Type Associate With Hub Sites",
					"value": "Sites Site Content Types Content Type Associate With Hub Sites",
					"action": "Invoke action associateWithHubSites",
					"description": "Associate a [content type][contentType] with a list of hub sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.associateWithHubSites"
						}
					}
				},
				{
					"name": "Sites Site Content Types Content Type Copy To Default Content Location",
					"value": "Sites Site Content Types Content Type Copy To Default Content Location",
					"action": "Invoke action copyToDefaultContentLocation",
					"description": "Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.copyToDefaultContentLocation"
						}
					}
				},
				{
					"name": "Sites Site Content Types Content Type Publish",
					"value": "Sites Site Content Types Content Type Publish",
					"action": "Invoke action publish",
					"description": "Publishes a [contentType][] present in a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Sites Site Content Types Content Type Unpublish",
					"value": "Sites Site Content Types Content Type Unpublish",
					"action": "Invoke action unpublish",
					"description": "Unpublish a [contentType][] from a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.unpublish"
						}
					}
				},
				{
					"name": "Sites Site Information Protection Data Loss Prevention Policies Evaluate",
					"value": "Sites Site Information Protection Data Loss Prevention Policies Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/informationProtection/dataLossPreventionPolicies/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Sites Site Information Protection Sensitivity Labels Evaluate",
					"value": "Sites Site Information Protection Sensitivity Labels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/informationProtection/sensitivityLabels/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"value": "Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Add Copy",
					"value": "Sites Site Lists List Content Types Add Copy",
					"action": "Invoke action addCopy",
					"description": "Add a copy of a [content type][contentType] from a [site][site] to a [list][list].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/microsoft.graph.addCopy"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Add Copy From Content Type Hub",
					"value": "Sites Site Lists List Content Types Add Copy From Content Type Hub",
					"action": "Invoke action addCopyFromContentTypeHub",
					"description": "Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/microsoft.graph.addCopyFromContentTypeHub"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Content Type Associate With Hub Sites",
					"value": "Sites Site Lists List Content Types Content Type Associate With Hub Sites",
					"action": "Invoke action associateWithHubSites",
					"description": "Associate a [content type][contentType] with a list of hub sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.associateWithHubSites"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Content Type Copy To Default Content Location",
					"value": "Sites Site Lists List Content Types Content Type Copy To Default Content Location",
					"action": "Invoke action copyToDefaultContentLocation",
					"description": "Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.copyToDefaultContentLocation"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Content Type Publish",
					"value": "Sites Site Lists List Content Types Content Type Publish",
					"action": "Invoke action publish",
					"description": "Publishes a [contentType][] present in a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Content Type Unpublish",
					"value": "Sites Site Lists List Content Types Content Type Unpublish",
					"action": "Invoke action unpublish",
					"description": "Unpublish a [contentType][] from a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.unpublish"
						}
					}
				},
				{
					"name": "Sites Site Lists List Items List Item Document Set Versions Document Set Version Restore",
					"value": "Sites Site Lists List Items List Item Document Set Versions Document Set Version Restore",
					"action": "Invoke action restore",
					"description": "Restore a document set version.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Sites Site Lists List Items List Item Create Link",
					"value": "Sites Site Lists List Items List Item Create Link",
					"action": "Invoke action createLink",
					"description": "Create a sharing link for a listItem. The **createLink** action creates a new sharing link if the specified link type doesn't already exist for the calling application.\nIf a sharing link of the specified type already exists for the app, this action will return the existing sharing link. **listItem** resources inherit sharing permissions from the list the item resides in.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.createLink"
						}
					}
				},
				{
					"name": "Sites Site Lists List Items List Item Versions List Item Version Restore Version",
					"value": "Sites Site Lists List Items List Item Versions List Item Version Restore Version",
					"action": "Invoke action restoreVersion",
					"description": "Invoke action restoreVersion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/microsoft.graph.restoreVersion"
						}
					}
				},
				{
					"name": "Sites Site Lists List Subscriptions Subscription Reauthorize",
					"value": "Sites Site Lists List Subscriptions Subscription Reauthorize",
					"action": "Invoke action reauthorize",
					"description": "Invoke action reauthorize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}/microsoft.graph.reauthorize"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Get Notebook From Web Url",
					"value": "Sites Site Onenote Notebooks Get Notebook From Web Url",
					"action": "Invoke action getNotebookFromWebUrl",
					"description": "Retrieve the properties and relationships of a notebook object by using its URL path. The location can be user notebooks on Microsoft 365, group notebooks, or SharePoint site-hosted team notebooks on Microsoft 365.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/microsoft.graph.getNotebookFromWebUrl"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Copy Notebook",
					"value": "Sites Site Onenote Notebooks Notebook Copy Notebook",
					"action": "Invoke action copyNotebook",
					"description": "Copies a notebook to the Notebooks folder in the destination Documents library. The folder is created if it doesn't exist. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/microsoft.graph.copyNotebook"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"value": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"value": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook",
					"value": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group",
					"value": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Sites Site Onenote Pages Onenote Page Copy To Section",
					"value": "Sites Site Onenote Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Sites Site Onenote Pages Onenote Page Onenote Patch Content",
					"value": "Sites Site Onenote Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"value": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"value": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Sites Site Onenote Sections Onenote Section Copy To Notebook",
					"value": "Sites Site Onenote Sections Onenote Section Copy To Notebook",
					"action": "Invoke action copyToNotebook",
					"description": "Copies a section to a specific notebook. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToNotebook"
						}
					}
				},
				{
					"name": "Sites Site Onenote Sections Onenote Section Copy To Section Group",
					"value": "Sites Site Onenote Sections Onenote Section Copy To Section Group",
					"action": "Invoke action copyToSectionGroup",
					"description": "Copies a section to a specific section group. For Copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/microsoft.graph.copyToSectionGroup"
						}
					}
				},
				{
					"name": "Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section",
					"value": "Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section",
					"action": "Invoke action copyToSection",
					"description": "Copy a page to a specific section. For copy operations, you follow an asynchronous calling pattern:  First call the Copy action, and then poll the operation endpoint for the result.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.copyToSection"
						}
					}
				},
				{
					"name": "Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"value": "Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content",
					"action": "Invoke action onenotePatchContent",
					"description": "Invoke action onenotePatchContent",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.onenotePatchContent"
						}
					}
				},
				{
					"name": "Sites Site Pages Site Page Canvas Layout Horizontal Sections Horizontal Section Columns Horizontal Section Column Webparts Web Part Get Position Of Web Part",
					"value": "Sites Site Pages Site Page Canvas Layout Horizontal Sections Horizontal Section Columns Horizontal Section Column Webparts Web Part Get Position Of Web Part",
					"action": "Invoke action getPositionOfWebPart",
					"description": "Invoke action getPositionOfWebPart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts/{{$parameter[\"webPart-id\"]}}/microsoft.graph.getPositionOfWebPart"
						}
					}
				},
				{
					"name": "Sites Site Pages Site Page Canvas Layout Vertical Section Webparts Web Part Get Position Of Web Part",
					"value": "Sites Site Pages Site Page Canvas Layout Vertical Section Webparts Web Part Get Position Of Web Part",
					"action": "Invoke action getPositionOfWebPart",
					"description": "Invoke action getPositionOfWebPart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts/{{$parameter[\"webPart-id\"]}}/microsoft.graph.getPositionOfWebPart"
						}
					}
				},
				{
					"name": "Sites Site Pages Site Page Get Web Parts By Position",
					"value": "Sites Site Pages Site Page Get Web Parts By Position",
					"action": "Invoke action getWebPartsByPosition",
					"description": "Invoke action getWebPartsByPosition",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/microsoft.graph.getWebPartsByPosition"
						}
					}
				},
				{
					"name": "Sites Site Pages Site Page Publish",
					"value": "Sites Site Pages Site Page Publish",
					"action": "Invoke action publish",
					"description": "Invoke action publish",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Sites Site Pages Site Page Web Parts Web Part Get Position Of Web Part",
					"value": "Sites Site Pages Site Page Web Parts Web Part Get Position Of Web Part",
					"action": "Invoke action getPositionOfWebPart",
					"description": "Invoke action getPositionOfWebPart",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts/{{$parameter[\"webPart-id\"]}}/microsoft.graph.getPositionOfWebPart"
						}
					}
				},
				{
					"name": "Sites Site Permissions Permission Grant",
					"value": "Sites Site Permissions Permission Grant",
					"action": "Invoke action grant",
					"description": "Grant users access to a link represented by a [permission][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}/microsoft.graph.grant"
						}
					}
				},
				{
					"name": "Sites Site Permissions Permission Revoke Grants",
					"value": "Sites Site Permissions Permission Revoke Grants",
					"action": "Invoke action revokeGrants",
					"description": "Revoke access to a [listItem][] or [driveItem][] granted via a sharing link by removing the specified [recipient][] from the link.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}/microsoft.graph.revokeGrants"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sites/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Add"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.site\",\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"createdByUser\": {\n      \"@odata.type\": \"#microsoft.graph.user\",\n      \"activities\": [\n        {\n          \"contentInfo\": {},\n          \"historyItems\": [\n            {\n              \"activity\": {}\n            }\n          ],\n          \"status\": {},\n          \"visualElements\": {\n            \"attribution\": {},\n            \"content\": {}\n          }\n        }\n      ],\n      \"agreementAcceptances\": [\n        {}\n      ],\n      \"analytics\": {\n        \"activityStatistics\": [\n          {}\n        ],\n        \"settings\": {}\n      },\n      \"appConsentRequestsForApproval\": [\n        {\n          \"pendingScopes\": [\n            {}\n          ],\n          \"userConsentRequests\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n              \"createdBy\": {},\n              \"approval\": {\n                \"steps\": [\n                  {\n                    \"reviewedBy\": {}\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      ],\n      \"appRoleAssignedResources\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n          \"addIns\": [\n            {\n              \"properties\": [\n                {}\n              ]\n            }\n          ],\n          \"alternativeNames\": [\n            null\n          ],\n          \"appManagementPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"restrictions\": {\n                \"keyCredentials\": [\n                  {}\n                ],\n                \"passwordCredentials\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"appRoleAssignedTo\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"appRoles\": [\n            {\n              \"allowedMemberTypes\": [\n                null\n              ]\n            }\n          ],\n          \"claimsMappingPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"definition\": [\n                null\n              ]\n            }\n          ],\n          \"createdObjects\": [\n            {}\n          ],\n          \"customSecurityAttributes\": {},\n          \"delegatedPermissionClassifications\": [\n            {}\n          ],\n          \"endpoints\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.endpoint\"\n            }\n          ],\n          \"federatedIdentityCredentials\": [\n            {\n              \"audiences\": [\n                null\n              ]\n            }\n          ],\n          \"homeRealmDiscoveryPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n            }\n          ],\n          \"info\": {},\n          \"keyCredentials\": [\n            {}\n          ],\n          \"licenseDetails\": [\n            {\n              \"servicePlans\": [\n                {}\n              ]\n            }\n          ],\n          \"memberOf\": [\n            {}\n          ],\n          \"notificationEmailAddresses\": [\n            null\n          ],\n          \"oauth2PermissionGrants\": [\n            {}\n          ],\n          \"ownedObjects\": [\n            {}\n          ],\n          \"owners\": [\n            {}\n          ],\n          \"passwordCredentials\": [\n            {}\n          ],\n          \"passwordSingleSignOnSettings\": {\n            \"fields\": [\n              {}\n            ]\n          },\n          \"publishedPermissionScopes\": [\n            {}\n          ],\n          \"replyUrls\": [\n            null\n          ],\n          \"samlSingleSignOnSettings\": {},\n          \"servicePrincipalNames\": [\n            null\n          ],\n          \"synchronization\": {\n            \"jobs\": [\n              {\n                \"schedule\": {},\n                \"schema\": {\n                  \"directories\": [\n                    {\n                      \"objects\": [\n                        {\n                          \"attributes\": [\n                            {\n                              \"apiExpressions\": [\n                                {}\n                              ],\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"referencedObjects\": [\n                                {}\n                              ]\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"supportedApis\": [\n                            null\n                          ]\n                        }\n                      ]\n                    }\n                  ],\n                  \"synchronizationRules\": [\n                    {\n                      \"metadata\": [\n                        {}\n                      ],\n                      \"objectMappings\": [\n                        {\n                          \"attributeMappings\": [\n                            {\n                              \"source\": {\n                                \"parameters\": [\n                                  {\n                                    \"value\": {}\n                                  }\n                                ]\n                              }\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"scope\": {\n                            \"categoryFilterGroups\": [\n                              {\n                                \"clauses\": [\n                                  {\n                                    \"targetOperand\": {\n                                      \"values\": [\n                                        null\n                                      ]\n                                    }\n                                  }\n                                ]\n                              }\n                            ],\n                            \"groups\": [\n                              {}\n                            ],\n                            \"inputFilterGroups\": [\n                              {}\n                            ]\n                          }\n                        }\n                      ]\n                    }\n                  ]\n                },\n                \"status\": {\n                  \"lastExecution\": {\n                    \"error\": {}\n                  },\n                  \"lastSuccessfulExecution\": {},\n                  \"lastSuccessfulExecutionWithExports\": {},\n                  \"progress\": [\n                    {}\n                  ],\n                  \"quarantine\": {\n                    \"error\": {}\n                  },\n                  \"synchronizedEntryCountByType\": [\n                    {}\n                  ]\n                },\n                \"synchronizationJobSettings\": [\n                  {}\n                ]\n              }\n            ],\n            \"secrets\": [\n              {}\n            ],\n            \"templates\": [\n              {\n                \"metadata\": [\n                  {}\n                ],\n                \"schema\": {}\n              }\n            ]\n          },\n          \"tags\": [\n            null\n          ],\n          \"tokenIssuancePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n            }\n          ],\n          \"tokenLifetimePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n            }\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"verifiedPublisher\": {}\n        }\n      ],\n      \"appRoleAssignments\": [\n        {}\n      ],\n      \"approvals\": [\n        {}\n      ],\n      \"assignedLicenses\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"assignedPlans\": [\n        {}\n      ],\n      \"authentication\": {\n        \"emailMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n          }\n        ],\n        \"fido2Methods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n            \"attestationCertificates\": [\n              null\n            ]\n          }\n        ],\n        \"methods\": [\n          {}\n        ],\n        \"microsoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n            \"device\": {\n              \"@odata.type\": \"#microsoft.graph.device\",\n              \"alternativeSecurityIds\": [\n                {}\n              ],\n              \"commands\": [\n                {\n                  \"payload\": {},\n                  \"responsepayload\": {}\n                }\n              ],\n              \"extensionAttributes\": {},\n              \"extensions\": [\n                {}\n              ],\n              \"hostnames\": [\n                null\n              ],\n              \"memberOf\": [\n                {}\n              ],\n              \"physicalIds\": [\n                null\n              ],\n              \"registeredOwners\": [\n                {}\n              ],\n              \"registeredUsers\": [\n                {}\n              ],\n              \"systemLabels\": [\n                null\n              ],\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"usageRights\": [\n                {}\n              ]\n            }\n          }\n        ],\n        \"operations\": [\n          {}\n        ],\n        \"passwordMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n          }\n        ],\n        \"passwordlessMicrosoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n            \"device\": {}\n          }\n        ],\n        \"phoneMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n          }\n        ],\n        \"softwareOathMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n          }\n        ],\n        \"temporaryAccessPassMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n          }\n        ],\n        \"windowsHelloForBusinessMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n            \"device\": {}\n          }\n        ]\n      },\n      \"authorizationInfo\": {\n        \"certificateUserIds\": [\n          null\n        ]\n      },\n      \"businessPhones\": [\n        null\n      ],\n      \"calendar\": {\n        \"allowedOnlineMeetingProviders\": [\n          null\n        ],\n        \"calendarPermissions\": [\n          {\n            \"allowedRoles\": [\n              null\n            ],\n            \"emailAddress\": {},\n            \"role\": {}\n          }\n        ],\n        \"calendarView\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.event\",\n            \"categories\": [\n              null\n            ],\n            \"attachments\": [\n              {}\n            ],\n            \"attendees\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.attendee\",\n                \"emailAddress\": {},\n                \"proposedNewTime\": {\n                  \"end\": {},\n                  \"start\": {}\n                },\n                \"status\": {}\n              }\n            ],\n            \"body\": {},\n            \"calendar\": {},\n            \"cancelledOccurrences\": [\n              null\n            ],\n            \"end\": {},\n            \"exceptionOccurrences\": [\n              {}\n            ],\n            \"extensions\": [\n              {}\n            ],\n            \"instances\": [\n              {}\n            ],\n            \"location\": {\n              \"address\": {},\n              \"coordinates\": {}\n            },\n            \"locations\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {\n                \"value\": [\n                  null\n                ]\n              }\n            ],\n            \"onlineMeeting\": {\n              \"phones\": [\n                {}\n              ],\n              \"tollFreeNumbers\": [\n                null\n              ]\n            },\n            \"onlineMeetingProvider\": {},\n            \"organizer\": {},\n            \"recurrence\": {\n              \"pattern\": {\n                \"daysOfWeek\": [\n                  null\n                ],\n                \"firstDayOfWeek\": {}\n              },\n              \"range\": {}\n            },\n            \"responseStatus\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"start\": {}\n          }\n        ],\n        \"defaultOnlineMeetingProvider\": {},\n        \"events\": [\n          {}\n        ],\n        \"multiValueExtendedProperties\": [\n          {}\n        ],\n        \"owner\": {},\n        \"singleValueExtendedProperties\": [\n          {}\n        ]\n      },\n      \"calendarGroups\": [\n        {\n          \"calendars\": [\n            {}\n          ]\n        }\n      ],\n      \"calendarView\": [\n        {}\n      ],\n      \"calendars\": [\n        {}\n      ],\n      \"chats\": [\n        {\n          \"installedApps\": [\n            {\n              \"teamsApp\": {\n                \"appDefinitions\": [\n                  {\n                    \"bot\": {},\n                    \"colorIcon\": {\n                      \"hostedContent\": {}\n                    },\n                    \"createdBy\": {},\n                    \"outlineIcon\": {}\n                  }\n                ]\n              },\n              \"teamsAppDefinition\": {}\n            }\n          ],\n          \"lastMessagePreview\": {\n            \"body\": {},\n            \"eventDetail\": {},\n            \"from\": {\n              \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n            }\n          },\n          \"members\": [\n            {\n              \"roles\": [\n                null\n              ]\n            }\n          ],\n          \"messages\": [\n            {\n              \"attachments\": [\n                {}\n              ],\n              \"body\": {},\n              \"channelIdentity\": {},\n              \"eventDetail\": {},\n              \"from\": {},\n              \"hostedContents\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                }\n              ],\n              \"mentions\": [\n                {\n                  \"mentioned\": {\n                    \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                    \"conversation\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                    },\n                    \"tag\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                    }\n                  }\n                }\n              ],\n              \"messageHistory\": [\n                {\n                  \"reaction\": {\n                    \"user\": {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                    }\n                  }\n                }\n              ],\n              \"messageType\": {},\n              \"onBehalfOf\": {},\n              \"policyViolation\": {\n                \"policyTip\": {\n                  \"matchedConditionDescriptions\": [\n                    null\n                  ]\n                }\n              },\n              \"reactions\": [\n                {}\n              ],\n              \"replies\": [\n                {}\n              ]\n            }\n          ],\n          \"onlineMeetingInfo\": {\n            \"organizer\": {\n              \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n            }\n          },\n          \"operations\": [\n            {\n              \"error\": {}\n            }\n          ],\n          \"permissionGrants\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n            }\n          ],\n          \"pinnedMessages\": [\n            {\n              \"message\": {}\n            }\n          ],\n          \"tabs\": [\n            {\n              \"configuration\": {},\n              \"teamsApp\": {}\n            }\n          ],\n          \"viewpoint\": {}\n        }\n      ],\n      \"cloudPCs\": [\n        {\n          \"connectivityResult\": {\n            \"failedHealthCheckItems\": [\n              {}\n            ]\n          },\n          \"lastLoginResult\": {},\n          \"lastRemoteActionResult\": {\n            \"statusDetails\": {\n              \"additionalInformation\": [\n                {}\n              ]\n            }\n          },\n          \"partnerAgentInstallResults\": [\n            {}\n          ],\n          \"statusDetails\": {}\n        }\n      ],\n      \"contactFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"contacts\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.contact\",\n              \"children\": [\n                null\n              ],\n              \"emailAddresses\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                }\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"startDateTime\": {}\n              },\n              \"imAddresses\": [\n                null\n              ],\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"phones\": [\n                {}\n              ],\n              \"photo\": {},\n              \"postalAddresses\": [\n                {}\n              ],\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"websites\": [\n                {}\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ]\n        }\n      ],\n      \"contacts\": [\n        {}\n      ],\n      \"createdObjects\": [\n        {}\n      ],\n      \"customSecurityAttributes\": {},\n      \"deviceEnrollmentConfigurations\": [\n        {\n          \"assignments\": [\n            {\n              \"target\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ]\n        }\n      ],\n      \"deviceKeys\": [\n        {}\n      ],\n      \"deviceManagementTroubleshootingEvents\": [\n        {\n          \"additionalInformation\": [\n            {}\n          ],\n          \"troubleshootingErrorDetails\": {\n            \"resources\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"devices\": [\n        {}\n      ],\n      \"directReports\": [\n        {}\n      ],\n      \"drive\": {\n        \"@odata.type\": \"#microsoft.graph.drive\",\n        \"activities\": [\n          {\n            \"action\": {\n              \"comment\": {\n                \"parentAuthor\": {},\n                \"participants\": [\n                  {}\n                ]\n              },\n              \"create\": {},\n              \"delete\": {},\n              \"edit\": {},\n              \"mention\": {\n                \"mentionees\": [\n                  {}\n                ]\n              },\n              \"move\": {},\n              \"rename\": {},\n              \"restore\": {},\n              \"share\": {\n                \"recipients\": [\n                  {}\n                ]\n              },\n              \"version\": {}\n            },\n            \"actor\": {},\n            \"driveItem\": {\n              \"@odata.type\": \"#microsoft.graph.driveItem\",\n              \"activities\": [\n                {}\n              ],\n              \"analytics\": {\n                \"allTime\": {\n                  \"access\": {},\n                  \"activities\": [\n                    {\n                      \"access\": {},\n                      \"actor\": {},\n                      \"driveItem\": {}\n                    }\n                  ],\n                  \"create\": {},\n                  \"delete\": {},\n                  \"edit\": {},\n                  \"incompleteData\": {},\n                  \"move\": {}\n                },\n                \"itemActivityStats\": [\n                  {}\n                ],\n                \"lastSevenDays\": {}\n              },\n              \"audio\": {},\n              \"bundle\": {\n                \"album\": {}\n              },\n              \"children\": [\n                {}\n              ],\n              \"deleted\": {},\n              \"file\": {\n                \"hashes\": {}\n              },\n              \"fileSystemInfo\": {},\n              \"folder\": {\n                \"view\": {}\n              },\n              \"image\": {},\n              \"listItem\": {\n                \"@odata.type\": \"#microsoft.graph.listItem\",\n                \"activities\": [\n                  {}\n                ],\n                \"analytics\": {},\n                \"contentType\": {},\n                \"deleted\": {},\n                \"documentSetVersions\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                    \"lastModifiedBy\": {},\n                    \"publication\": {},\n                    \"fields\": {},\n                    \"createdBy\": {},\n                    \"items\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"driveItem\": {},\n                \"fields\": {},\n                \"sharepointIds\": {},\n                \"versions\": [\n                  {}\n                ]\n              },\n              \"location\": {},\n              \"malware\": {},\n              \"media\": {\n                \"mediaSource\": {}\n              },\n              \"package\": {},\n              \"pendingOperations\": {\n                \"pendingContentUpdate\": {}\n              },\n              \"permissions\": [\n                {\n                  \"grantedTo\": {},\n                  \"grantedToIdentities\": [\n                    {}\n                  ],\n                  \"grantedToIdentitiesV2\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                      \"group\": {},\n                      \"siteGroup\": {\n                        \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                      },\n                      \"siteUser\": {}\n                    }\n                  ],\n                  \"grantedToV2\": {},\n                  \"inheritedFrom\": {\n                    \"sharepointIds\": {}\n                  },\n                  \"invitation\": {\n                    \"invitedBy\": {}\n                  },\n                  \"link\": {\n                    \"application\": {}\n                  },\n                  \"roles\": [\n                    null\n                  ]\n                }\n              ],\n              \"photo\": {},\n              \"publication\": {},\n              \"remoteItem\": {\n                \"createdBy\": {},\n                \"file\": {},\n                \"fileSystemInfo\": {},\n                \"folder\": {},\n                \"image\": {},\n                \"lastModifiedBy\": {},\n                \"package\": {},\n                \"parentReference\": {},\n                \"shared\": {\n                  \"owner\": {},\n                  \"sharedBy\": {}\n                },\n                \"sharepointIds\": {},\n                \"specialFolder\": {},\n                \"video\": {}\n              },\n              \"root\": {},\n              \"searchResult\": {},\n              \"shared\": {},\n              \"sharepointIds\": {},\n              \"source\": {},\n              \"specialFolder\": {},\n              \"subscriptions\": [\n                {}\n              ],\n              \"thumbnails\": [\n                {\n                  \"large\": {},\n                  \"medium\": {},\n                  \"small\": {},\n                  \"source\": {}\n                }\n              ],\n              \"versions\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                }\n              ],\n              \"video\": {},\n              \"workbook\": {\n                \"application\": {},\n                \"comments\": [\n                  {\n                    \"replies\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"functions\": {},\n                \"names\": [\n                  {\n                    \"value\": {},\n                    \"worksheet\": {\n                      \"charts\": [\n                        {\n                          \"axes\": {\n                            \"categoryAxis\": {\n                              \"format\": {\n                                \"font\": {},\n                                \"line\": {}\n                              },\n                              \"majorGridlines\": {\n                                \"format\": {\n                                  \"line\": {}\n                                }\n                              },\n                              \"majorUnit\": {},\n                              \"maximum\": {},\n                              \"minimum\": {},\n                              \"minorGridlines\": {},\n                              \"minorUnit\": {},\n                              \"title\": {\n                                \"format\": {\n                                  \"font\": {}\n                                }\n                              }\n                            },\n                            \"seriesAxis\": {},\n                            \"valueAxis\": {}\n                          },\n                          \"dataLabels\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"format\": {\n                            \"fill\": {},\n                            \"font\": {}\n                          },\n                          \"legend\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"series\": [\n                            {\n                              \"format\": {\n                                \"fill\": {},\n                                \"line\": {}\n                              },\n                              \"points\": [\n                                {\n                                  \"format\": {\n                                    \"fill\": {}\n                                  },\n                                  \"value\": {}\n                                }\n                              ]\n                            }\n                          ],\n                          \"title\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"names\": [\n                        {}\n                      ],\n                      \"pivotTables\": [\n                        {\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"protection\": {\n                        \"options\": {}\n                      },\n                      \"tables\": [\n                        {\n                          \"columns\": [\n                            {\n                              \"filter\": {\n                                \"criteria\": {\n                                  \"icon\": {},\n                                  \"values\": {}\n                                }\n                              },\n                              \"values\": {}\n                            }\n                          ],\n                          \"rows\": [\n                            {\n                              \"values\": {}\n                            }\n                          ],\n                          \"sort\": {\n                            \"fields\": [\n                              {\n                                \"icon\": {}\n                              }\n                            ]\n                          },\n                          \"worksheet\": {}\n                        }\n                      ]\n                    }\n                  }\n                ],\n                \"operations\": [\n                  {\n                    \"error\": {\n                      \"innerError\": {}\n                    }\n                  }\n                ],\n                \"tables\": [\n                  {}\n                ],\n                \"worksheets\": [\n                  {}\n                ]\n              }\n            },\n            \"listItem\": {},\n            \"times\": {}\n          }\n        ],\n        \"bundles\": [\n          {}\n        ],\n        \"following\": [\n          {}\n        ],\n        \"items\": [\n          {}\n        ],\n        \"list\": {\n          \"@odata.type\": \"#microsoft.graph.list\",\n          \"activities\": [\n            {}\n          ],\n          \"columns\": [\n            {\n              \"boolean\": {},\n              \"calculated\": {},\n              \"choice\": {\n                \"choices\": [\n                  null\n                ]\n              },\n              \"contentApprovalStatus\": {},\n              \"currency\": {},\n              \"dateTime\": {},\n              \"defaultValue\": {},\n              \"geolocation\": {},\n              \"hyperlinkOrPicture\": {},\n              \"lookup\": {},\n              \"number\": {},\n              \"personOrGroup\": {},\n              \"sourceColumn\": {},\n              \"sourceContentType\": {},\n              \"term\": {\n                \"parentTerm\": {\n                  \"children\": [\n                    {}\n                  ],\n                  \"descriptions\": [\n                    {}\n                  ],\n                  \"labels\": [\n                    {}\n                  ],\n                  \"properties\": [\n                    {}\n                  ],\n                  \"relations\": [\n                    {\n                      \"fromTerm\": {},\n                      \"set\": {\n                        \"children\": [\n                          {}\n                        ],\n                        \"localizedNames\": [\n                          {}\n                        ],\n                        \"parentGroup\": {\n                          \"sets\": [\n                            {}\n                          ]\n                        },\n                        \"properties\": [\n                          {}\n                        ],\n                        \"relations\": [\n                          {}\n                        ],\n                        \"terms\": [\n                          {}\n                        ]\n                      },\n                      \"toTerm\": {}\n                    }\n                  ],\n                  \"set\": {}\n                },\n                \"termSet\": {}\n              },\n              \"text\": {},\n              \"thumbnail\": {},\n              \"validation\": {\n                \"descriptions\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"contentTypes\": [\n            {\n              \"associatedHubsUrls\": [\n                null\n              ],\n              \"base\": {},\n              \"baseTypes\": [\n                {}\n              ],\n              \"columnLinks\": [\n                {}\n              ],\n              \"columnPositions\": [\n                {}\n              ],\n              \"columns\": [\n                {}\n              ],\n              \"documentSet\": {\n                \"allowedContentTypes\": [\n                  {}\n                ],\n                \"defaultContents\": [\n                  {\n                    \"contentType\": {}\n                  }\n                ],\n                \"sharedColumns\": [\n                  {}\n                ],\n                \"welcomePageColumns\": [\n                  {}\n                ]\n              },\n              \"documentTemplate\": {},\n              \"inheritedFrom\": {},\n              \"order\": {}\n            }\n          ],\n          \"drive\": {},\n          \"items\": [\n            {}\n          ],\n          \"list\": {},\n          \"operations\": [\n            {\n              \"error\": {\n                \"details\": [\n                  {}\n                ],\n                \"innerError\": {\n                  \"details\": [\n                    {}\n                  ]\n                }\n              }\n            }\n          ],\n          \"sharepointIds\": {},\n          \"subscriptions\": [\n            {}\n          ],\n          \"system\": {}\n        },\n        \"owner\": {},\n        \"quota\": {\n          \"storagePlanInformation\": {}\n        },\n        \"root\": {},\n        \"sharePointIds\": {},\n        \"special\": [\n          {}\n        ],\n        \"system\": {}\n      },\n      \"drives\": [\n        {}\n      ],\n      \"employeeOrgData\": {},\n      \"events\": [\n        {}\n      ],\n      \"extensions\": [\n        {}\n      ],\n      \"followedSites\": [\n        {}\n      ],\n      \"identities\": [\n        {}\n      ],\n      \"imAddresses\": [\n        null\n      ],\n      \"inferenceClassification\": {\n        \"overrides\": [\n          {\n            \"senderEmailAddress\": {}\n          }\n        ]\n      },\n      \"infoCatalogs\": [\n        null\n      ],\n      \"informationProtection\": {\n        \"bitlocker\": {\n          \"recoveryKeys\": [\n            {}\n          ]\n        },\n        \"dataLossPreventionPolicies\": [\n          {}\n        ],\n        \"policy\": {\n          \"labels\": [\n            {\n              \"parent\": {\n                \"parent\": {}\n              }\n            }\n          ]\n        },\n        \"sensitivityLabels\": [\n          {\n            \"assignedPolicies\": [\n              {}\n            ],\n            \"autoLabeling\": {\n              \"sensitiveTypeIds\": [\n                null\n              ]\n            },\n            \"labelActions\": [\n              {}\n            ],\n            \"sublabels\": [\n              {}\n            ]\n          }\n        ],\n        \"sensitivityPolicySettings\": {\n          \"applicableTo\": {}\n        },\n        \"threatAssessmentRequests\": [\n          {\n            \"createdBy\": {},\n            \"results\": [\n              {}\n            ]\n          }\n        ]\n      },\n      \"insights\": {\n        \"shared\": [\n          {\n            \"lastShared\": {\n              \"sharedBy\": {},\n              \"sharingReference\": {}\n            },\n            \"lastSharedMethod\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {},\n            \"sharingHistory\": [\n              {}\n            ]\n          }\n        ],\n        \"trending\": [\n          {\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ],\n        \"used\": [\n          {\n            \"lastUsed\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ]\n      },\n      \"interests\": [\n        null\n      ],\n      \"joinedGroups\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.group\",\n          \"acceptedSenders\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"assignedLabels\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {}\n          ],\n          \"calendar\": {},\n          \"calendarView\": [\n            {}\n          ],\n          \"conversations\": [\n            {\n              \"threads\": [\n                {\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"posts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.post\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inReplyTo\": {},\n                      \"mentions\": [\n                        {\n                          \"createdBy\": {},\n                          \"mentioned\": {}\n                        }\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"newParticipants\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueSenders\": [\n                    null\n                  ]\n                }\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"createdOnBehalfOf\": {},\n          \"drive\": {},\n          \"drives\": [\n            {}\n          ],\n          \"endpoints\": [\n            {}\n          ],\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"groupLifecyclePolicies\": [\n            {}\n          ],\n          \"groupTypes\": [\n            null\n          ],\n          \"infoCatalogs\": [\n            null\n          ],\n          \"licenseProcessingState\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"members\": [\n            {}\n          ],\n          \"membersWithLicenseErrors\": [\n            {}\n          ],\n          \"membershipRuleProcessingStatus\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {\n            \"notebooks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.notebook\",\n                \"createdBy\": {},\n                \"lastModifiedBy\": {},\n                \"links\": {\n                  \"oneNoteClientUrl\": {},\n                  \"oneNoteWebUrl\": {}\n                },\n                \"sectionGroups\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                    \"parentNotebook\": {},\n                    \"parentSectionGroup\": {},\n                    \"sectionGroups\": [\n                      {}\n                    ],\n                    \"sections\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                        \"links\": {\n                          \"oneNoteClientUrl\": {},\n                          \"oneNoteWebUrl\": {}\n                        },\n                        \"pages\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                            \"links\": {\n                              \"oneNoteClientUrl\": {},\n                              \"oneNoteWebUrl\": {}\n                            },\n                            \"parentNotebook\": {},\n                            \"parentSection\": {},\n                            \"userTags\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"parentNotebook\": {},\n                        \"parentSectionGroup\": {}\n                      }\n                    ]\n                  }\n                ],\n                \"sections\": [\n                  {}\n                ]\n              }\n            ],\n            \"operations\": [\n              {\n                \"error\": {}\n              }\n            ],\n            \"pages\": [\n              {}\n            ],\n            \"resources\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n              }\n            ],\n            \"sectionGroups\": [\n              {}\n            ],\n            \"sections\": [\n              {}\n            ]\n          },\n          \"owners\": [\n            {}\n          ],\n          \"permissionGrants\": [\n            {}\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"plans\": [\n              {\n                \"buckets\": [\n                  {\n                    \"creationSource\": {},\n                    \"tasks\": [\n                      {\n                        \"appliedCategories\": {},\n                        \"assignedToTaskBoardFormat\": {\n                          \"orderHintsByAssignee\": {}\n                        },\n                        \"assignments\": {},\n                        \"bucketTaskBoardFormat\": {},\n                        \"completedBy\": {},\n                        \"createdBy\": {},\n                        \"creationSource\": {\n                          \"creationSourceKind\": {},\n                          \"teamsPublicationInfo\": {\n                            \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                          }\n                        },\n                        \"details\": {\n                          \"checklist\": {},\n                          \"notes\": {},\n                          \"references\": {}\n                        },\n                        \"previewType\": {},\n                        \"progressTaskBoardFormat\": {},\n                        \"recurrence\": {\n                          \"schedule\": {\n                            \"pattern\": {}\n                          }\n                        }\n                      }\n                    ]\n                  }\n                ],\n                \"container\": {},\n                \"contexts\": {},\n                \"createdBy\": {},\n                \"creationSource\": {\n                  \"creationSourceKind\": {}\n                },\n                \"details\": {\n                  \"categoryDescriptions\": {},\n                  \"contextDetails\": {},\n                  \"sharedWith\": {}\n                },\n                \"sharedWithContainers\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"proxyAddresses\": [\n            null\n          ],\n          \"rejectedSenders\": [\n            {}\n          ],\n          \"resourceBehaviorOptions\": [\n            null\n          ],\n          \"resourceProvisioningOptions\": [\n            null\n          ],\n          \"settings\": [\n            {\n              \"values\": [\n                {}\n              ]\n            }\n          ],\n          \"sites\": [\n            {}\n          ],\n          \"team\": {\n            \"allChannels\": [\n              {\n                \"filesFolder\": {},\n                \"members\": [\n                  {}\n                ],\n                \"messages\": [\n                  {}\n                ],\n                \"moderationSettings\": {},\n                \"sharedWithTeams\": [\n                  {\n                    \"team\": {},\n                    \"allowedMembers\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"summary\": {},\n                \"tabs\": [\n                  {}\n                ]\n              }\n            ],\n            \"channels\": [\n              {}\n            ],\n            \"discoverySettings\": {},\n            \"funSettings\": {},\n            \"group\": {},\n            \"guestSettings\": {},\n            \"incomingChannels\": [\n              {}\n            ],\n            \"installedApps\": [\n              {}\n            ],\n            \"memberSettings\": {},\n            \"members\": [\n              {}\n            ],\n            \"messagingSettings\": {},\n            \"operations\": [\n              {}\n            ],\n            \"owners\": [\n              {}\n            ],\n            \"permissionGrants\": [\n              {}\n            ],\n            \"photo\": {},\n            \"primaryChannel\": {},\n            \"schedule\": {\n              \"offerShiftRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                  \"createdBy\": {},\n                  \"lastModifiedBy\": {}\n                }\n              ],\n              \"openShiftChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                }\n              ],\n              \"openShifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShift\",\n                  \"draftOpenShift\": {\n                    \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                    \"activities\": [\n                      {\n                        \"theme\": {}\n                      }\n                    ]\n                  },\n                  \"sharedOpenShift\": {}\n                }\n              ],\n              \"provisionStatus\": {},\n              \"schedulingGroups\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                  \"userIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"shifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.shift\",\n                  \"draftShift\": {},\n                  \"sharedShift\": {}\n                }\n              ],\n              \"swapShiftsChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                }\n              ],\n              \"timeCards\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeCard\",\n                  \"breaks\": [\n                    {\n                      \"end\": {\n                        \"notes\": {}\n                      },\n                      \"notes\": {},\n                      \"start\": {}\n                    }\n                  ],\n                  \"clockInEvent\": {},\n                  \"clockOutEvent\": {},\n                  \"notes\": {},\n                  \"originalEntry\": {\n                    \"breaks\": [\n                      {}\n                    ],\n                    \"clockInEvent\": {},\n                    \"clockOutEvent\": {}\n                  }\n                }\n              ],\n              \"timeClockSettings\": {\n                \"approvedLocation\": {}\n              },\n              \"timeOffReasons\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                }\n              ],\n              \"timeOffRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                }\n              ],\n              \"timesOff\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOff\",\n                  \"draftTimeOff\": {},\n                  \"sharedTimeOff\": {}\n                }\n              ],\n              \"workforceIntegrationIds\": [\n                null\n              ]\n            },\n            \"summary\": {},\n            \"tags\": [\n              {\n                \"members\": [\n                  {}\n                ]\n              }\n            ],\n            \"template\": {},\n            \"templateDefinition\": {\n              \"categories\": [\n                null\n              ],\n              \"lastModifiedBy\": {},\n              \"teamDefinition\": {}\n            }\n          },\n          \"threads\": [\n            {}\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveMembers\": [\n            {}\n          ],\n          \"writebackConfiguration\": {}\n        }\n      ],\n      \"joinedTeams\": [\n        {}\n      ],\n      \"licenseAssignmentStates\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"licenseDetails\": [\n        {}\n      ],\n      \"mailFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"messageRules\": [\n            {\n              \"actions\": {\n                \"assignCategories\": [\n                  null\n                ],\n                \"forwardAsAttachmentTo\": [\n                  {}\n                ],\n                \"forwardTo\": [\n                  {}\n                ],\n                \"markImportance\": {},\n                \"redirectTo\": [\n                  {}\n                ]\n              },\n              \"conditions\": {\n                \"bodyContains\": [\n                  null\n                ],\n                \"bodyOrSubjectContains\": [\n                  null\n                ],\n                \"categories\": [\n                  null\n                ],\n                \"fromAddresses\": [\n                  {}\n                ],\n                \"headerContains\": [\n                  null\n                ],\n                \"importance\": {},\n                \"recipientContains\": [\n                  null\n                ],\n                \"senderContains\": [\n                  null\n                ],\n                \"sensitivity\": {},\n                \"sentToAddresses\": [\n                  {}\n                ],\n                \"subjectContains\": [\n                  null\n                ],\n                \"withinSizeRange\": {}\n              },\n              \"exceptions\": {}\n            }\n          ],\n          \"messages\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.message\",\n              \"attachments\": [\n                {}\n              ],\n              \"bccRecipients\": [\n                {}\n              ],\n              \"body\": {},\n              \"ccRecipients\": [\n                {}\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {},\n              \"from\": {},\n              \"importance\": {},\n              \"inferenceClassification\": {},\n              \"internetMessageHeaders\": [\n                {}\n              ],\n              \"mentions\": [\n                {}\n              ],\n              \"mentionsPreview\": {},\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"replyTo\": [\n                {}\n              ],\n              \"sender\": {},\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"toRecipients\": [\n                {}\n              ],\n              \"uniqueBody\": {},\n              \"unsubscribeData\": [\n                null\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ],\n          \"userConfigurations\": [\n            {}\n          ]\n        }\n      ],\n      \"mailboxSettings\": {\n        \"automaticRepliesSetting\": {\n          \"scheduledEndDateTime\": {},\n          \"scheduledStartDateTime\": {}\n        },\n        \"language\": {},\n        \"workingHours\": {\n          \"daysOfWeek\": [\n            {}\n          ],\n          \"timeZone\": {}\n        }\n      },\n      \"managedAppRegistrations\": [\n        {\n          \"appIdentifier\": {},\n          \"appliedPolicies\": [\n            {\n              \"roleScopeTagIds\": [\n                null\n              ]\n            }\n          ],\n          \"flaggedReasons\": [\n            null\n          ],\n          \"intendedPolicies\": [\n            {}\n          ],\n          \"operations\": [\n            {}\n          ]\n        }\n      ],\n      \"managedDevices\": [\n        {\n          \"assignmentFilterEvaluationStatusDetails\": [\n            {}\n          ],\n          \"chromeOSDeviceInfo\": [\n            {}\n          ],\n          \"cloudPcRemoteActionResults\": [\n            {}\n          ],\n          \"configurationManagerClientEnabledFeatures\": {},\n          \"configurationManagerClientHealthState\": {},\n          \"configurationManagerClientInformation\": {},\n          \"detectedApps\": [\n            {\n              \"managedDevices\": [\n                {}\n              ]\n            }\n          ],\n          \"deviceActionResults\": [\n            {\n              \"actionState\": {}\n            }\n          ],\n          \"deviceCategory\": {\n            \"roleScopeTagIds\": [\n              null\n            ]\n          },\n          \"deviceCompliancePolicyStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceHealthAttestationState\": {},\n          \"deviceHealthScriptStates\": [\n            {\n              \"assignmentFilterIds\": [\n                null\n              ]\n            }\n          ],\n          \"hardwareInformation\": {\n            \"sharedDeviceCachedUsers\": [\n              {}\n            ],\n            \"wiredIPv4Addresses\": [\n              null\n            ]\n          },\n          \"logCollectionRequests\": [\n            {}\n          ],\n          \"managedDeviceMobileAppConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ],\n          \"securityBaselineStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"contributingPolicies\": [\n                    {}\n                  ],\n                  \"sourcePolicies\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"users\": [\n            {}\n          ],\n          \"usersLoggedOn\": [\n            {}\n          ],\n          \"windowsProtectionState\": {\n            \"detectedMalwareState\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"manager\": {},\n      \"memberOf\": [\n        {}\n      ],\n      \"messages\": [\n        {}\n      ],\n      \"mobileAppIntentAndStates\": [\n        {\n          \"mobileAppList\": [\n            {\n              \"supportedDeviceTypes\": [\n                {\n                  \"type\": {}\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      \"mobileAppTroubleshootingEvents\": [\n        {\n          \"appLogCollectionRequests\": [\n            {\n              \"customLogFolders\": [\n                null\n              ]\n            }\n          ],\n          \"history\": [\n            {\n              \"troubleshootingErrorDetails\": {}\n            }\n          ]\n        }\n      ],\n      \"notifications\": [\n        {\n          \"payload\": {\n            \"visualContent\": {}\n          },\n          \"targetPolicy\": {\n            \"platformTypes\": [\n              null\n            ]\n          }\n        }\n      ],\n      \"oauth2PermissionGrants\": [\n        {}\n      ],\n      \"onPremisesExtensionAttributes\": {},\n      \"onPremisesProvisioningErrors\": [\n        {}\n      ],\n      \"onenote\": {},\n      \"onlineMeetings\": [\n        {\n          \"anonymizeIdentityForRoles\": [\n            null\n          ],\n          \"attendanceReports\": [\n            {\n              \"attendanceRecords\": [\n                {\n                  \"attendanceIntervals\": [\n                    {}\n                  ],\n                  \"identity\": {}\n                }\n              ]\n            }\n          ],\n          \"audioConferencing\": {\n            \"tollFreeNumbers\": [\n              null\n            ],\n            \"tollNumbers\": [\n              null\n            ]\n          },\n          \"broadcastSettings\": {\n            \"captions\": {\n              \"translationLanguages\": [\n                null\n              ]\n            }\n          },\n          \"capabilities\": [\n            null\n          ],\n          \"chatInfo\": {},\n          \"joinInformation\": {},\n          \"joinMeetingIdSettings\": {},\n          \"lobbyBypassSettings\": {},\n          \"meetingAttendanceReport\": {},\n          \"participants\": {\n            \"attendees\": [\n              {\n                \"identity\": {},\n                \"role\": {}\n              }\n            ],\n            \"contributors\": [\n              {}\n            ],\n            \"organizer\": {},\n            \"producers\": [\n              {}\n            ]\n          },\n          \"registration\": {\n            \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n            \"registrants\": [\n              {}\n            ],\n            \"customQuestions\": [\n              {\n                \"answerOptions\": [\n                  null\n                ]\n              }\n            ],\n            \"speakers\": [\n              {}\n            ]\n          },\n          \"transcripts\": [\n            {}\n          ],\n          \"virtualAppointment\": {\n            \"appointmentClients\": [\n              {}\n            ],\n            \"settings\": {}\n          },\n          \"watermarkProtection\": {}\n        }\n      ],\n      \"otherMails\": [\n        null\n      ],\n      \"outlook\": {\n        \"masterCategories\": [\n          {}\n        ],\n        \"taskFolders\": [\n          {\n            \"multiValueExtendedProperties\": [\n              {}\n            ],\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"importance\": {},\n                \"multiValueExtendedProperties\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"sensitivity\": {},\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"startDateTime\": {}\n              }\n            ]\n          }\n        ],\n        \"taskGroups\": [\n          {\n            \"taskFolders\": [\n              {}\n            ]\n          }\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"ownedDevices\": [\n        {}\n      ],\n      \"ownedObjects\": [\n        {}\n      ],\n      \"passwordProfile\": {},\n      \"pastProjects\": [\n        null\n      ],\n      \"pendingAccessReviewInstances\": [\n        {\n          \"contactedReviewers\": [\n            {}\n          ],\n          \"decisions\": [\n            {\n              \"appliedBy\": {\n                \"@odata.type\": \"#microsoft.graph.userIdentity\"\n              },\n              \"insights\": [\n                {}\n              ],\n              \"instance\": {},\n              \"principal\": {},\n              \"principalResourceMembership\": {},\n              \"resource\": {},\n              \"reviewedBy\": {},\n              \"target\": {}\n            }\n          ],\n          \"definition\": {\n            \"additionalNotificationRecipients\": [\n              {\n                \"notificationRecipientScope\": {}\n              }\n            ],\n            \"backupReviewers\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n              }\n            ],\n            \"createdBy\": {},\n            \"fallbackReviewers\": [\n              {}\n            ],\n            \"instanceEnumerationScope\": {},\n            \"instances\": [\n              {}\n            ],\n            \"reviewers\": [\n              {}\n            ],\n            \"scope\": {},\n            \"settings\": {\n              \"applyActions\": [\n                {}\n              ],\n              \"recommendationInsightSettings\": [\n                {}\n              ],\n              \"recurrence\": {}\n            },\n            \"stageSettings\": [\n              {\n                \"decisionsThatWillMoveToNextStage\": [\n                  null\n                ],\n                \"dependsOn\": [\n                  null\n                ],\n                \"fallbackReviewers\": [\n                  {}\n                ],\n                \"recommendationInsightSettings\": [\n                  {}\n                ],\n                \"reviewers\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"errors\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n            }\n          ],\n          \"fallbackReviewers\": [\n            {}\n          ],\n          \"reviewers\": [\n            {}\n          ],\n          \"scope\": {},\n          \"stages\": [\n            {\n              \"decisions\": [\n                {}\n              ],\n              \"fallbackReviewers\": [\n                {}\n              ],\n              \"reviewers\": [\n                {}\n              ]\n            }\n          ]\n        }\n      ],\n      \"people\": [\n        {\n          \"emailAddresses\": [\n            {}\n          ],\n          \"phones\": [\n            {}\n          ],\n          \"postalAddresses\": [\n            {}\n          ],\n          \"sources\": [\n            {}\n          ],\n          \"websites\": [\n            {}\n          ]\n        }\n      ],\n      \"photo\": {},\n      \"photos\": [\n        {}\n      ],\n      \"planner\": {\n        \"all\": [\n          {}\n        ],\n        \"favoritePlanReferences\": {},\n        \"favoritePlans\": [\n          {}\n        ],\n        \"plans\": [\n          {}\n        ],\n        \"recentPlanReferences\": {},\n        \"recentPlans\": [\n          {}\n        ],\n        \"rosterPlans\": [\n          {}\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"presence\": {\n        \"outOfOfficeSettings\": {},\n        \"statusMessage\": {\n          \"expiryDateTime\": {},\n          \"message\": {}\n        }\n      },\n      \"print\": {\n        \"recentPrinterShares\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.printerShare\",\n            \"capabilities\": {\n              \"bottomMargins\": [\n                null\n              ],\n              \"colorModes\": [\n                null\n              ],\n              \"contentTypes\": [\n                null\n              ],\n              \"copiesPerJob\": {},\n              \"dpis\": [\n                null\n              ],\n              \"duplexModes\": [\n                null\n              ],\n              \"feedDirections\": [\n                null\n              ],\n              \"feedOrientations\": [\n                null\n              ],\n              \"finishings\": [\n                null\n              ],\n              \"inputBins\": [\n                null\n              ],\n              \"leftMargins\": [\n                null\n              ],\n              \"mediaColors\": [\n                null\n              ],\n              \"mediaSizes\": [\n                null\n              ],\n              \"mediaTypes\": [\n                null\n              ],\n              \"multipageLayouts\": [\n                null\n              ],\n              \"orientations\": [\n                null\n              ],\n              \"outputBins\": [\n                null\n              ],\n              \"pagesPerSheet\": [\n                null\n              ],\n              \"qualities\": [\n                null\n              ],\n              \"rightMargins\": [\n                null\n              ],\n              \"scalings\": [\n                null\n              ],\n              \"supportedColorConfigurations\": [\n                null\n              ],\n              \"supportedCopiesPerJob\": {},\n              \"supportedDocumentMimeTypes\": [\n                null\n              ],\n              \"supportedDuplexConfigurations\": [\n                null\n              ],\n              \"supportedFinishings\": [\n                {}\n              ],\n              \"supportedMediaColors\": [\n                null\n              ],\n              \"supportedMediaSizes\": [\n                null\n              ],\n              \"supportedMediaTypes\": [\n                null\n              ],\n              \"supportedOrientations\": [\n                {}\n              ],\n              \"supportedOutputBins\": [\n                null\n              ],\n              \"supportedPagesPerSheet\": {},\n              \"supportedPresentationDirections\": [\n                null\n              ],\n              \"supportedPrintQualities\": [\n                {}\n              ],\n              \"topMargins\": [\n                null\n              ]\n            },\n            \"defaults\": {\n              \"colorMode\": {},\n              \"duplexConfiguration\": {},\n              \"duplexMode\": {},\n              \"finishings\": [\n                {}\n              ],\n              \"multipageLayout\": {},\n              \"orientation\": {},\n              \"presentationDirection\": {},\n              \"printColorConfiguration\": {},\n              \"printQuality\": {},\n              \"quality\": {},\n              \"scaling\": {}\n            },\n            \"jobs\": [\n              {\n                \"configuration\": {\n                  \"colorMode\": {},\n                  \"duplexMode\": {},\n                  \"feedOrientation\": {},\n                  \"finishings\": [\n                    {}\n                  ],\n                  \"margin\": {},\n                  \"multipageLayout\": {},\n                  \"orientation\": {},\n                  \"pageRanges\": [\n                    {}\n                  ],\n                  \"quality\": {},\n                  \"scaling\": {}\n                },\n                \"createdBy\": {},\n                \"documents\": [\n                  {\n                    \"configuration\": {\n                      \"colorMode\": {},\n                      \"duplexMode\": {},\n                      \"feedDirection\": {},\n                      \"feedOrientation\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"margin\": {},\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"pageRanges\": [\n                        {}\n                      ],\n                      \"quality\": {},\n                      \"scaling\": {}\n                    }\n                  }\n                ],\n                \"status\": {\n                  \"details\": [\n                    null\n                  ],\n                  \"state\": {}\n                },\n                \"tasks\": [\n                  {\n                    \"definition\": {\n                      \"createdBy\": {},\n                      \"tasks\": [\n                        {}\n                      ]\n                    },\n                    \"status\": {},\n                    \"trigger\": {\n                      \"definition\": {}\n                    }\n                  }\n                ]\n              }\n            ],\n            \"location\": {\n              \"organization\": [\n                null\n              ],\n              \"subdivision\": [\n                null\n              ],\n              \"subunit\": [\n                null\n              ]\n            },\n            \"status\": {\n              \"details\": [\n                null\n              ],\n              \"processingStateReasons\": [\n                null\n              ],\n              \"state\": {}\n            },\n            \"allowedGroups\": [\n              {}\n            ],\n            \"allowedUsers\": [\n              {}\n            ],\n            \"printer\": {\n              \"@odata.type\": \"#microsoft.graph.printer\",\n              \"connectors\": [\n                {\n                  \"deviceHealth\": {},\n                  \"location\": {}\n                }\n              ],\n              \"share\": {},\n              \"shares\": [\n                {}\n              ],\n              \"taskTriggers\": [\n                {}\n              ]\n            },\n            \"viewPoint\": {}\n          }\n        ]\n      },\n      \"profile\": {\n        \"account\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n            \"createdBy\": {},\n            \"inference\": {},\n            \"lastModifiedBy\": {},\n            \"source\": {\n              \"type\": [\n                null\n              ]\n            },\n            \"preferredLanguageTag\": {}\n          }\n        ],\n        \"addresses\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemAddress\",\n            \"detail\": {},\n            \"geoCoordinates\": {}\n          }\n        ],\n        \"anniversaries\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n          }\n        ],\n        \"awards\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAward\"\n          }\n        ],\n        \"certifications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personCertification\"\n          }\n        ],\n        \"educationalActivities\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n            \"institution\": {\n              \"location\": {}\n            },\n            \"program\": {\n              \"activities\": [\n                null\n              ],\n              \"awards\": [\n                null\n              ],\n              \"fieldsOfStudy\": [\n                null\n              ]\n            }\n          }\n        ],\n        \"emails\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemEmail\",\n            \"type\": {}\n          }\n        ],\n        \"interests\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personInterest\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"languages\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n            \"reading\": {},\n            \"spoken\": {},\n            \"written\": {}\n          }\n        ],\n        \"names\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personName\",\n            \"pronunciation\": {}\n          }\n        ],\n        \"notes\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n            \"detail\": {}\n          }\n        ],\n        \"patents\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPatent\"\n          }\n        ],\n        \"phones\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPhone\",\n            \"type\": {}\n          }\n        ],\n        \"positions\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.workPosition\",\n            \"categories\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {\n              \"company\": {\n                \"address\": {}\n              }\n            },\n            \"manager\": {}\n          }\n        ],\n        \"projects\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n            \"categories\": [\n              null\n            ],\n            \"client\": {},\n            \"collaborationTags\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {},\n            \"sponsors\": [\n              {}\n            ]\n          }\n        ],\n        \"publications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPublication\"\n          }\n        ],\n        \"skills\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"webAccounts\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.webAccount\",\n            \"service\": {}\n          }\n        ],\n        \"websites\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personWebsite\",\n            \"categories\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"provisionedPlans\": [\n        {}\n      ],\n      \"proxyAddresses\": [\n        null\n      ],\n      \"registeredDevices\": [\n        {}\n      ],\n      \"responsibilities\": [\n        null\n      ],\n      \"schools\": [\n        null\n      ],\n      \"scopedRoleMemberOf\": [\n        {\n          \"roleMemberInfo\": {}\n        }\n      ],\n      \"security\": {\n        \"informationProtection\": {\n          \"labelPolicySettings\": {},\n          \"sensitivityLabels\": [\n            {\n              \"contentFormats\": [\n                null\n              ],\n              \"parent\": {}\n            }\n          ]\n        }\n      },\n      \"settings\": {\n        \"contactMergeSuggestions\": {},\n        \"itemInsights\": {},\n        \"regionalAndLanguageSettings\": {\n          \"authoringLanguages\": [\n            {}\n          ],\n          \"defaultDisplayLanguage\": {},\n          \"defaultRegionalFormat\": {},\n          \"defaultSpeechInputLanguage\": {},\n          \"defaultTranslationLanguage\": {},\n          \"regionalFormatOverrides\": {},\n          \"translationPreferences\": {\n            \"languageOverrides\": [\n              {}\n            ],\n            \"translationBehavior\": {},\n            \"untranslatedLanguages\": [\n              null\n            ]\n          }\n        },\n        \"shiftPreferences\": {\n          \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n          \"availability\": [\n            {\n              \"recurrence\": {},\n              \"timeSlots\": [\n                {}\n              ]\n            }\n          ]\n        }\n      },\n      \"signInActivity\": {},\n      \"skills\": [\n        null\n      ],\n      \"teamwork\": {\n        \"associatedTeams\": [\n          {}\n        ],\n        \"installedApps\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n            \"chat\": {}\n          }\n        ]\n      },\n      \"todo\": {\n        \"lists\": [\n          {\n            \"extensions\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"attachmentSessions\": [\n                  {\n                    \"nextExpectedRanges\": [\n                      null\n                    ]\n                  }\n                ],\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"categories\": [\n                  null\n                ],\n                \"checklistItems\": [\n                  {}\n                ],\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"extensions\": [\n                  {}\n                ],\n                \"importance\": {},\n                \"linkedResources\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"startDateTime\": {},\n                \"status\": {}\n              }\n            ]\n          }\n        ]\n      },\n      \"transitiveMemberOf\": [\n        {}\n      ],\n      \"transitiveReports\": [\n        {}\n      ],\n      \"usageRights\": [\n        {}\n      ],\n      \"windowsInformationProtectionDeviceRegistrations\": [\n        {}\n      ]\n    },\n    \"lastModifiedBy\": {},\n    \"lastModifiedByUser\": {},\n    \"parentReference\": {},\n    \"analytics\": {},\n    \"columns\": [\n      {}\n    ],\n    \"contentTypes\": [\n      {}\n    ],\n    \"deleted\": {},\n    \"drive\": {},\n    \"drives\": [\n      {}\n    ],\n    \"externalColumns\": [\n      {}\n    ],\n    \"informationProtection\": {},\n    \"items\": [\n      {}\n    ],\n    \"lists\": [\n      {}\n    ],\n    \"onenote\": {},\n    \"operations\": [\n      {}\n    ],\n    \"pages\": [\n      {\n        \"@odata.type\": \"#microsoft.graph.sitePage\",\n        \"canvasLayout\": {\n          \"horizontalSections\": [\n            {\n              \"columns\": [\n                {\n                  \"webparts\": [\n                    {}\n                  ]\n                }\n              ]\n            }\n          ],\n          \"verticalSection\": {\n            \"emphasis\": {},\n            \"webparts\": [\n              {}\n            ]\n          }\n        },\n        \"contentType\": {},\n        \"publishingState\": {},\n        \"reactions\": {},\n        \"titleArea\": {\n          \"serverProcessedContent\": {\n            \"componentDependencies\": [\n              {}\n            ],\n            \"customMetadata\": [\n              {\n                \"value\": {}\n              }\n            ],\n            \"htmlStrings\": [\n              {}\n            ],\n            \"imageSources\": [\n              {}\n            ],\n            \"links\": [\n              {}\n            ],\n            \"searchablePlainTexts\": [\n              {}\n            ]\n          }\n        },\n        \"webParts\": [\n          {}\n        ]\n      }\n    ],\n    \"permissions\": [\n      {}\n    ],\n    \"root\": {},\n    \"settings\": {},\n    \"sharepointIds\": {},\n    \"siteCollection\": {\n      \"root\": {}\n    },\n    \"sites\": [\n      {}\n    ],\n    \"termStore\": {\n      \"groups\": [\n        {}\n      ],\n      \"languageTags\": [\n        null\n      ],\n      \"sets\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Add"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/microsoft.graph.remove",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Remove"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "[\n  {\n    \"@odata.type\": \"#microsoft.graph.site\",\n    \"createdBy\": {\n      \"application\": {},\n      \"device\": {},\n      \"user\": {}\n    },\n    \"createdByUser\": {\n      \"@odata.type\": \"#microsoft.graph.user\",\n      \"activities\": [\n        {\n          \"contentInfo\": {},\n          \"historyItems\": [\n            {\n              \"activity\": {}\n            }\n          ],\n          \"status\": {},\n          \"visualElements\": {\n            \"attribution\": {},\n            \"content\": {}\n          }\n        }\n      ],\n      \"agreementAcceptances\": [\n        {}\n      ],\n      \"analytics\": {\n        \"activityStatistics\": [\n          {}\n        ],\n        \"settings\": {}\n      },\n      \"appConsentRequestsForApproval\": [\n        {\n          \"pendingScopes\": [\n            {}\n          ],\n          \"userConsentRequests\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.userConsentRequest\",\n              \"createdBy\": {},\n              \"approval\": {\n                \"steps\": [\n                  {\n                    \"reviewedBy\": {}\n                  }\n                ]\n              }\n            }\n          ]\n        }\n      ],\n      \"appRoleAssignedResources\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.servicePrincipal\",\n          \"addIns\": [\n            {\n              \"properties\": [\n                {}\n              ]\n            }\n          ],\n          \"alternativeNames\": [\n            null\n          ],\n          \"appManagementPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.appManagementPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"restrictions\": {\n                \"keyCredentials\": [\n                  {}\n                ],\n                \"passwordCredentials\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"appRoleAssignedTo\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"appRoles\": [\n            {\n              \"allowedMemberTypes\": [\n                null\n              ]\n            }\n          ],\n          \"claimsMappingPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.claimsMappingPolicy\",\n              \"appliesTo\": [\n                {}\n              ],\n              \"definition\": [\n                null\n              ]\n            }\n          ],\n          \"createdObjects\": [\n            {}\n          ],\n          \"customSecurityAttributes\": {},\n          \"delegatedPermissionClassifications\": [\n            {}\n          ],\n          \"endpoints\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.endpoint\"\n            }\n          ],\n          \"federatedIdentityCredentials\": [\n            {\n              \"audiences\": [\n                null\n              ]\n            }\n          ],\n          \"homeRealmDiscoveryPolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.homeRealmDiscoveryPolicy\"\n            }\n          ],\n          \"info\": {},\n          \"keyCredentials\": [\n            {}\n          ],\n          \"licenseDetails\": [\n            {\n              \"servicePlans\": [\n                {}\n              ]\n            }\n          ],\n          \"memberOf\": [\n            {}\n          ],\n          \"notificationEmailAddresses\": [\n            null\n          ],\n          \"oauth2PermissionGrants\": [\n            {}\n          ],\n          \"ownedObjects\": [\n            {}\n          ],\n          \"owners\": [\n            {}\n          ],\n          \"passwordCredentials\": [\n            {}\n          ],\n          \"passwordSingleSignOnSettings\": {\n            \"fields\": [\n              {}\n            ]\n          },\n          \"publishedPermissionScopes\": [\n            {}\n          ],\n          \"replyUrls\": [\n            null\n          ],\n          \"samlSingleSignOnSettings\": {},\n          \"servicePrincipalNames\": [\n            null\n          ],\n          \"synchronization\": {\n            \"jobs\": [\n              {\n                \"schedule\": {},\n                \"schema\": {\n                  \"directories\": [\n                    {\n                      \"objects\": [\n                        {\n                          \"attributes\": [\n                            {\n                              \"apiExpressions\": [\n                                {}\n                              ],\n                              \"metadata\": [\n                                {}\n                              ],\n                              \"referencedObjects\": [\n                                {}\n                              ]\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"supportedApis\": [\n                            null\n                          ]\n                        }\n                      ]\n                    }\n                  ],\n                  \"synchronizationRules\": [\n                    {\n                      \"metadata\": [\n                        {}\n                      ],\n                      \"objectMappings\": [\n                        {\n                          \"attributeMappings\": [\n                            {\n                              \"source\": {\n                                \"parameters\": [\n                                  {\n                                    \"value\": {}\n                                  }\n                                ]\n                              }\n                            }\n                          ],\n                          \"metadata\": [\n                            {}\n                          ],\n                          \"scope\": {\n                            \"categoryFilterGroups\": [\n                              {\n                                \"clauses\": [\n                                  {\n                                    \"targetOperand\": {\n                                      \"values\": [\n                                        null\n                                      ]\n                                    }\n                                  }\n                                ]\n                              }\n                            ],\n                            \"groups\": [\n                              {}\n                            ],\n                            \"inputFilterGroups\": [\n                              {}\n                            ]\n                          }\n                        }\n                      ]\n                    }\n                  ]\n                },\n                \"status\": {\n                  \"lastExecution\": {\n                    \"error\": {}\n                  },\n                  \"lastSuccessfulExecution\": {},\n                  \"lastSuccessfulExecutionWithExports\": {},\n                  \"progress\": [\n                    {}\n                  ],\n                  \"quarantine\": {\n                    \"error\": {}\n                  },\n                  \"synchronizedEntryCountByType\": [\n                    {}\n                  ]\n                },\n                \"synchronizationJobSettings\": [\n                  {}\n                ]\n              }\n            ],\n            \"secrets\": [\n              {}\n            ],\n            \"templates\": [\n              {\n                \"metadata\": [\n                  {}\n                ],\n                \"schema\": {}\n              }\n            ]\n          },\n          \"tags\": [\n            null\n          ],\n          \"tokenIssuancePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenIssuancePolicy\"\n            }\n          ],\n          \"tokenLifetimePolicies\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.tokenLifetimePolicy\"\n            }\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"verifiedPublisher\": {}\n        }\n      ],\n      \"appRoleAssignments\": [\n        {}\n      ],\n      \"approvals\": [\n        {}\n      ],\n      \"assignedLicenses\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"assignedPlans\": [\n        {}\n      ],\n      \"authentication\": {\n        \"emailMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.emailAuthenticationMethod\"\n          }\n        ],\n        \"fido2Methods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.fido2AuthenticationMethod\",\n            \"attestationCertificates\": [\n              null\n            ]\n          }\n        ],\n        \"methods\": [\n          {}\n        ],\n        \"microsoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.microsoftAuthenticatorAuthenticationMethod\",\n            \"device\": {\n              \"@odata.type\": \"#microsoft.graph.device\",\n              \"alternativeSecurityIds\": [\n                {}\n              ],\n              \"commands\": [\n                {\n                  \"payload\": {},\n                  \"responsepayload\": {}\n                }\n              ],\n              \"extensionAttributes\": {},\n              \"extensions\": [\n                {}\n              ],\n              \"hostnames\": [\n                null\n              ],\n              \"memberOf\": [\n                {}\n              ],\n              \"physicalIds\": [\n                null\n              ],\n              \"registeredOwners\": [\n                {}\n              ],\n              \"registeredUsers\": [\n                {}\n              ],\n              \"systemLabels\": [\n                null\n              ],\n              \"transitiveMemberOf\": [\n                {}\n              ],\n              \"usageRights\": [\n                {}\n              ]\n            }\n          }\n        ],\n        \"operations\": [\n          {}\n        ],\n        \"passwordMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordAuthenticationMethod\"\n          }\n        ],\n        \"passwordlessMicrosoftAuthenticatorMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod\",\n            \"device\": {}\n          }\n        ],\n        \"phoneMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.phoneAuthenticationMethod\"\n          }\n        ],\n        \"softwareOathMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.softwareOathAuthenticationMethod\"\n          }\n        ],\n        \"temporaryAccessPassMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.temporaryAccessPassAuthenticationMethod\"\n          }\n        ],\n        \"windowsHelloForBusinessMethods\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.windowsHelloForBusinessAuthenticationMethod\",\n            \"device\": {}\n          }\n        ]\n      },\n      \"authorizationInfo\": {\n        \"certificateUserIds\": [\n          null\n        ]\n      },\n      \"businessPhones\": [\n        null\n      ],\n      \"calendar\": {\n        \"allowedOnlineMeetingProviders\": [\n          null\n        ],\n        \"calendarPermissions\": [\n          {\n            \"allowedRoles\": [\n              null\n            ],\n            \"emailAddress\": {},\n            \"role\": {}\n          }\n        ],\n        \"calendarView\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.event\",\n            \"categories\": [\n              null\n            ],\n            \"attachments\": [\n              {}\n            ],\n            \"attendees\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.attendee\",\n                \"emailAddress\": {},\n                \"proposedNewTime\": {\n                  \"end\": {},\n                  \"start\": {}\n                },\n                \"status\": {}\n              }\n            ],\n            \"body\": {},\n            \"calendar\": {},\n            \"cancelledOccurrences\": [\n              null\n            ],\n            \"end\": {},\n            \"exceptionOccurrences\": [\n              {}\n            ],\n            \"extensions\": [\n              {}\n            ],\n            \"instances\": [\n              {}\n            ],\n            \"location\": {\n              \"address\": {},\n              \"coordinates\": {}\n            },\n            \"locations\": [\n              {}\n            ],\n            \"multiValueExtendedProperties\": [\n              {\n                \"value\": [\n                  null\n                ]\n              }\n            ],\n            \"onlineMeeting\": {\n              \"phones\": [\n                {}\n              ],\n              \"tollFreeNumbers\": [\n                null\n              ]\n            },\n            \"onlineMeetingProvider\": {},\n            \"organizer\": {},\n            \"recurrence\": {\n              \"pattern\": {\n                \"daysOfWeek\": [\n                  null\n                ],\n                \"firstDayOfWeek\": {}\n              },\n              \"range\": {}\n            },\n            \"responseStatus\": {},\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"start\": {}\n          }\n        ],\n        \"defaultOnlineMeetingProvider\": {},\n        \"events\": [\n          {}\n        ],\n        \"multiValueExtendedProperties\": [\n          {}\n        ],\n        \"owner\": {},\n        \"singleValueExtendedProperties\": [\n          {}\n        ]\n      },\n      \"calendarGroups\": [\n        {\n          \"calendars\": [\n            {}\n          ]\n        }\n      ],\n      \"calendarView\": [\n        {}\n      ],\n      \"calendars\": [\n        {}\n      ],\n      \"chats\": [\n        {\n          \"installedApps\": [\n            {\n              \"teamsApp\": {\n                \"appDefinitions\": [\n                  {\n                    \"bot\": {},\n                    \"colorIcon\": {\n                      \"hostedContent\": {}\n                    },\n                    \"createdBy\": {},\n                    \"outlineIcon\": {}\n                  }\n                ]\n              },\n              \"teamsAppDefinition\": {}\n            }\n          ],\n          \"lastMessagePreview\": {\n            \"body\": {},\n            \"eventDetail\": {},\n            \"from\": {\n              \"@odata.type\": \"#microsoft.graph.chatMessageFromIdentitySet\"\n            }\n          },\n          \"members\": [\n            {\n              \"roles\": [\n                null\n              ]\n            }\n          ],\n          \"messages\": [\n            {\n              \"attachments\": [\n                {}\n              ],\n              \"body\": {},\n              \"channelIdentity\": {},\n              \"eventDetail\": {},\n              \"from\": {},\n              \"hostedContents\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.chatMessageHostedContent\"\n                }\n              ],\n              \"mentions\": [\n                {\n                  \"mentioned\": {\n                    \"@odata.type\": \"#microsoft.graph.chatMessageMentionedIdentitySet\",\n                    \"conversation\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkConversationIdentity\"\n                    },\n                    \"tag\": {\n                      \"@odata.type\": \"#microsoft.graph.teamworkTagIdentity\"\n                    }\n                  }\n                }\n              ],\n              \"messageHistory\": [\n                {\n                  \"reaction\": {\n                    \"user\": {\n                      \"@odata.type\": \"#microsoft.graph.chatMessageReactionIdentitySet\"\n                    }\n                  }\n                }\n              ],\n              \"messageType\": {},\n              \"onBehalfOf\": {},\n              \"policyViolation\": {\n                \"policyTip\": {\n                  \"matchedConditionDescriptions\": [\n                    null\n                  ]\n                }\n              },\n              \"reactions\": [\n                {}\n              ],\n              \"replies\": [\n                {}\n              ]\n            }\n          ],\n          \"onlineMeetingInfo\": {\n            \"organizer\": {\n              \"@odata.type\": \"#microsoft.graph.teamworkUserIdentity\"\n            }\n          },\n          \"operations\": [\n            {\n              \"error\": {}\n            }\n          ],\n          \"permissionGrants\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.resourceSpecificPermissionGrant\"\n            }\n          ],\n          \"pinnedMessages\": [\n            {\n              \"message\": {}\n            }\n          ],\n          \"tabs\": [\n            {\n              \"configuration\": {},\n              \"teamsApp\": {}\n            }\n          ],\n          \"viewpoint\": {}\n        }\n      ],\n      \"cloudPCs\": [\n        {\n          \"connectivityResult\": {\n            \"failedHealthCheckItems\": [\n              {}\n            ]\n          },\n          \"lastLoginResult\": {},\n          \"lastRemoteActionResult\": {\n            \"statusDetails\": {\n              \"additionalInformation\": [\n                {}\n              ]\n            }\n          },\n          \"partnerAgentInstallResults\": [\n            {}\n          ],\n          \"statusDetails\": {}\n        }\n      ],\n      \"contactFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"contacts\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.contact\",\n              \"children\": [\n                null\n              ],\n              \"emailAddresses\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.typedEmailAddress\"\n                }\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"startDateTime\": {}\n              },\n              \"imAddresses\": [\n                null\n              ],\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"phones\": [\n                {}\n              ],\n              \"photo\": {},\n              \"postalAddresses\": [\n                {}\n              ],\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"websites\": [\n                {}\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ]\n        }\n      ],\n      \"contacts\": [\n        {}\n      ],\n      \"createdObjects\": [\n        {}\n      ],\n      \"customSecurityAttributes\": {},\n      \"deviceEnrollmentConfigurations\": [\n        {\n          \"assignments\": [\n            {\n              \"target\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ]\n        }\n      ],\n      \"deviceKeys\": [\n        {}\n      ],\n      \"deviceManagementTroubleshootingEvents\": [\n        {\n          \"additionalInformation\": [\n            {}\n          ],\n          \"troubleshootingErrorDetails\": {\n            \"resources\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"devices\": [\n        {}\n      ],\n      \"directReports\": [\n        {}\n      ],\n      \"drive\": {\n        \"@odata.type\": \"#microsoft.graph.drive\",\n        \"activities\": [\n          {\n            \"action\": {\n              \"comment\": {\n                \"parentAuthor\": {},\n                \"participants\": [\n                  {}\n                ]\n              },\n              \"create\": {},\n              \"delete\": {},\n              \"edit\": {},\n              \"mention\": {\n                \"mentionees\": [\n                  {}\n                ]\n              },\n              \"move\": {},\n              \"rename\": {},\n              \"restore\": {},\n              \"share\": {\n                \"recipients\": [\n                  {}\n                ]\n              },\n              \"version\": {}\n            },\n            \"actor\": {},\n            \"driveItem\": {\n              \"@odata.type\": \"#microsoft.graph.driveItem\",\n              \"activities\": [\n                {}\n              ],\n              \"analytics\": {\n                \"allTime\": {\n                  \"access\": {},\n                  \"activities\": [\n                    {\n                      \"access\": {},\n                      \"actor\": {},\n                      \"driveItem\": {}\n                    }\n                  ],\n                  \"create\": {},\n                  \"delete\": {},\n                  \"edit\": {},\n                  \"incompleteData\": {},\n                  \"move\": {}\n                },\n                \"itemActivityStats\": [\n                  {}\n                ],\n                \"lastSevenDays\": {}\n              },\n              \"audio\": {},\n              \"bundle\": {\n                \"album\": {}\n              },\n              \"children\": [\n                {}\n              ],\n              \"deleted\": {},\n              \"file\": {\n                \"hashes\": {}\n              },\n              \"fileSystemInfo\": {},\n              \"folder\": {\n                \"view\": {}\n              },\n              \"image\": {},\n              \"listItem\": {\n                \"@odata.type\": \"#microsoft.graph.listItem\",\n                \"activities\": [\n                  {}\n                ],\n                \"analytics\": {},\n                \"contentType\": {},\n                \"deleted\": {},\n                \"documentSetVersions\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.documentSetVersion\",\n                    \"lastModifiedBy\": {},\n                    \"publication\": {},\n                    \"fields\": {},\n                    \"createdBy\": {},\n                    \"items\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"driveItem\": {},\n                \"fields\": {},\n                \"sharepointIds\": {},\n                \"versions\": [\n                  {}\n                ]\n              },\n              \"location\": {},\n              \"malware\": {},\n              \"media\": {\n                \"mediaSource\": {}\n              },\n              \"package\": {},\n              \"pendingOperations\": {\n                \"pendingContentUpdate\": {}\n              },\n              \"permissions\": [\n                {\n                  \"grantedTo\": {},\n                  \"grantedToIdentities\": [\n                    {}\n                  ],\n                  \"grantedToIdentitiesV2\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.sharePointIdentitySet\",\n                      \"group\": {},\n                      \"siteGroup\": {\n                        \"@odata.type\": \"#microsoft.graph.sharePointIdentity\"\n                      },\n                      \"siteUser\": {}\n                    }\n                  ],\n                  \"grantedToV2\": {},\n                  \"inheritedFrom\": {\n                    \"sharepointIds\": {}\n                  },\n                  \"invitation\": {\n                    \"invitedBy\": {}\n                  },\n                  \"link\": {\n                    \"application\": {}\n                  },\n                  \"roles\": [\n                    null\n                  ]\n                }\n              ],\n              \"photo\": {},\n              \"publication\": {},\n              \"remoteItem\": {\n                \"createdBy\": {},\n                \"file\": {},\n                \"fileSystemInfo\": {},\n                \"folder\": {},\n                \"image\": {},\n                \"lastModifiedBy\": {},\n                \"package\": {},\n                \"parentReference\": {},\n                \"shared\": {\n                  \"owner\": {},\n                  \"sharedBy\": {}\n                },\n                \"sharepointIds\": {},\n                \"specialFolder\": {},\n                \"video\": {}\n              },\n              \"root\": {},\n              \"searchResult\": {},\n              \"shared\": {},\n              \"sharepointIds\": {},\n              \"source\": {},\n              \"specialFolder\": {},\n              \"subscriptions\": [\n                {}\n              ],\n              \"thumbnails\": [\n                {\n                  \"large\": {},\n                  \"medium\": {},\n                  \"small\": {},\n                  \"source\": {}\n                }\n              ],\n              \"versions\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.driveItemVersion\"\n                }\n              ],\n              \"video\": {},\n              \"workbook\": {\n                \"application\": {},\n                \"comments\": [\n                  {\n                    \"replies\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"functions\": {},\n                \"names\": [\n                  {\n                    \"value\": {},\n                    \"worksheet\": {\n                      \"charts\": [\n                        {\n                          \"axes\": {\n                            \"categoryAxis\": {\n                              \"format\": {\n                                \"font\": {},\n                                \"line\": {}\n                              },\n                              \"majorGridlines\": {\n                                \"format\": {\n                                  \"line\": {}\n                                }\n                              },\n                              \"majorUnit\": {},\n                              \"maximum\": {},\n                              \"minimum\": {},\n                              \"minorGridlines\": {},\n                              \"minorUnit\": {},\n                              \"title\": {\n                                \"format\": {\n                                  \"font\": {}\n                                }\n                              }\n                            },\n                            \"seriesAxis\": {},\n                            \"valueAxis\": {}\n                          },\n                          \"dataLabels\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"format\": {\n                            \"fill\": {},\n                            \"font\": {}\n                          },\n                          \"legend\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"series\": [\n                            {\n                              \"format\": {\n                                \"fill\": {},\n                                \"line\": {}\n                              },\n                              \"points\": [\n                                {\n                                  \"format\": {\n                                    \"fill\": {}\n                                  },\n                                  \"value\": {}\n                                }\n                              ]\n                            }\n                          ],\n                          \"title\": {\n                            \"format\": {\n                              \"fill\": {},\n                              \"font\": {}\n                            }\n                          },\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"names\": [\n                        {}\n                      ],\n                      \"pivotTables\": [\n                        {\n                          \"worksheet\": {}\n                        }\n                      ],\n                      \"protection\": {\n                        \"options\": {}\n                      },\n                      \"tables\": [\n                        {\n                          \"columns\": [\n                            {\n                              \"filter\": {\n                                \"criteria\": {\n                                  \"icon\": {},\n                                  \"values\": {}\n                                }\n                              },\n                              \"values\": {}\n                            }\n                          ],\n                          \"rows\": [\n                            {\n                              \"values\": {}\n                            }\n                          ],\n                          \"sort\": {\n                            \"fields\": [\n                              {\n                                \"icon\": {}\n                              }\n                            ]\n                          },\n                          \"worksheet\": {}\n                        }\n                      ]\n                    }\n                  }\n                ],\n                \"operations\": [\n                  {\n                    \"error\": {\n                      \"innerError\": {}\n                    }\n                  }\n                ],\n                \"tables\": [\n                  {}\n                ],\n                \"worksheets\": [\n                  {}\n                ]\n              }\n            },\n            \"listItem\": {},\n            \"times\": {}\n          }\n        ],\n        \"bundles\": [\n          {}\n        ],\n        \"following\": [\n          {}\n        ],\n        \"items\": [\n          {}\n        ],\n        \"list\": {\n          \"@odata.type\": \"#microsoft.graph.list\",\n          \"activities\": [\n            {}\n          ],\n          \"columns\": [\n            {\n              \"boolean\": {},\n              \"calculated\": {},\n              \"choice\": {\n                \"choices\": [\n                  null\n                ]\n              },\n              \"contentApprovalStatus\": {},\n              \"currency\": {},\n              \"dateTime\": {},\n              \"defaultValue\": {},\n              \"geolocation\": {},\n              \"hyperlinkOrPicture\": {},\n              \"lookup\": {},\n              \"number\": {},\n              \"personOrGroup\": {},\n              \"sourceColumn\": {},\n              \"sourceContentType\": {},\n              \"term\": {\n                \"parentTerm\": {\n                  \"children\": [\n                    {}\n                  ],\n                  \"descriptions\": [\n                    {}\n                  ],\n                  \"labels\": [\n                    {}\n                  ],\n                  \"properties\": [\n                    {}\n                  ],\n                  \"relations\": [\n                    {\n                      \"fromTerm\": {},\n                      \"set\": {\n                        \"children\": [\n                          {}\n                        ],\n                        \"localizedNames\": [\n                          {}\n                        ],\n                        \"parentGroup\": {\n                          \"sets\": [\n                            {}\n                          ]\n                        },\n                        \"properties\": [\n                          {}\n                        ],\n                        \"relations\": [\n                          {}\n                        ],\n                        \"terms\": [\n                          {}\n                        ]\n                      },\n                      \"toTerm\": {}\n                    }\n                  ],\n                  \"set\": {}\n                },\n                \"termSet\": {}\n              },\n              \"text\": {},\n              \"thumbnail\": {},\n              \"validation\": {\n                \"descriptions\": [\n                  {}\n                ]\n              }\n            }\n          ],\n          \"contentTypes\": [\n            {\n              \"associatedHubsUrls\": [\n                null\n              ],\n              \"base\": {},\n              \"baseTypes\": [\n                {}\n              ],\n              \"columnLinks\": [\n                {}\n              ],\n              \"columnPositions\": [\n                {}\n              ],\n              \"columns\": [\n                {}\n              ],\n              \"documentSet\": {\n                \"allowedContentTypes\": [\n                  {}\n                ],\n                \"defaultContents\": [\n                  {\n                    \"contentType\": {}\n                  }\n                ],\n                \"sharedColumns\": [\n                  {}\n                ],\n                \"welcomePageColumns\": [\n                  {}\n                ]\n              },\n              \"documentTemplate\": {},\n              \"inheritedFrom\": {},\n              \"order\": {}\n            }\n          ],\n          \"drive\": {},\n          \"items\": [\n            {}\n          ],\n          \"list\": {},\n          \"operations\": [\n            {\n              \"error\": {\n                \"details\": [\n                  {}\n                ],\n                \"innerError\": {\n                  \"details\": [\n                    {}\n                  ]\n                }\n              }\n            }\n          ],\n          \"sharepointIds\": {},\n          \"subscriptions\": [\n            {}\n          ],\n          \"system\": {}\n        },\n        \"owner\": {},\n        \"quota\": {\n          \"storagePlanInformation\": {}\n        },\n        \"root\": {},\n        \"sharePointIds\": {},\n        \"special\": [\n          {}\n        ],\n        \"system\": {}\n      },\n      \"drives\": [\n        {}\n      ],\n      \"employeeOrgData\": {},\n      \"events\": [\n        {}\n      ],\n      \"extensions\": [\n        {}\n      ],\n      \"followedSites\": [\n        {}\n      ],\n      \"identities\": [\n        {}\n      ],\n      \"imAddresses\": [\n        null\n      ],\n      \"inferenceClassification\": {\n        \"overrides\": [\n          {\n            \"senderEmailAddress\": {}\n          }\n        ]\n      },\n      \"infoCatalogs\": [\n        null\n      ],\n      \"informationProtection\": {\n        \"bitlocker\": {\n          \"recoveryKeys\": [\n            {}\n          ]\n        },\n        \"dataLossPreventionPolicies\": [\n          {}\n        ],\n        \"policy\": {\n          \"labels\": [\n            {\n              \"parent\": {\n                \"parent\": {}\n              }\n            }\n          ]\n        },\n        \"sensitivityLabels\": [\n          {\n            \"assignedPolicies\": [\n              {}\n            ],\n            \"autoLabeling\": {\n              \"sensitiveTypeIds\": [\n                null\n              ]\n            },\n            \"labelActions\": [\n              {}\n            ],\n            \"sublabels\": [\n              {}\n            ]\n          }\n        ],\n        \"sensitivityPolicySettings\": {\n          \"applicableTo\": {}\n        },\n        \"threatAssessmentRequests\": [\n          {\n            \"createdBy\": {},\n            \"results\": [\n              {}\n            ]\n          }\n        ]\n      },\n      \"insights\": {\n        \"shared\": [\n          {\n            \"lastShared\": {\n              \"sharedBy\": {},\n              \"sharingReference\": {}\n            },\n            \"lastSharedMethod\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {},\n            \"sharingHistory\": [\n              {}\n            ]\n          }\n        ],\n        \"trending\": [\n          {\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ],\n        \"used\": [\n          {\n            \"lastUsed\": {},\n            \"resource\": {},\n            \"resourceReference\": {},\n            \"resourceVisualization\": {}\n          }\n        ]\n      },\n      \"interests\": [\n        null\n      ],\n      \"joinedGroups\": [\n        {\n          \"@odata.type\": \"#microsoft.graph.group\",\n          \"acceptedSenders\": [\n            {}\n          ],\n          \"appRoleAssignments\": [\n            {}\n          ],\n          \"assignedLabels\": [\n            {}\n          ],\n          \"assignedLicenses\": [\n            {}\n          ],\n          \"calendar\": {},\n          \"calendarView\": [\n            {}\n          ],\n          \"conversations\": [\n            {\n              \"threads\": [\n                {\n                  \"ccRecipients\": [\n                    {}\n                  ],\n                  \"posts\": [\n                    {\n                      \"@odata.type\": \"#microsoft.graph.post\",\n                      \"attachments\": [\n                        {}\n                      ],\n                      \"body\": {},\n                      \"extensions\": [\n                        {}\n                      ],\n                      \"from\": {},\n                      \"importance\": {},\n                      \"inReplyTo\": {},\n                      \"mentions\": [\n                        {\n                          \"createdBy\": {},\n                          \"mentioned\": {}\n                        }\n                      ],\n                      \"multiValueExtendedProperties\": [\n                        {}\n                      ],\n                      \"newParticipants\": [\n                        {}\n                      ],\n                      \"sender\": {},\n                      \"singleValueExtendedProperties\": [\n                        {}\n                      ]\n                    }\n                  ],\n                  \"toRecipients\": [\n                    {}\n                  ],\n                  \"uniqueSenders\": [\n                    null\n                  ]\n                }\n              ],\n              \"uniqueSenders\": [\n                null\n              ]\n            }\n          ],\n          \"createdOnBehalfOf\": {},\n          \"drive\": {},\n          \"drives\": [\n            {}\n          ],\n          \"endpoints\": [\n            {}\n          ],\n          \"events\": [\n            {}\n          ],\n          \"extensions\": [\n            {}\n          ],\n          \"groupLifecyclePolicies\": [\n            {}\n          ],\n          \"groupTypes\": [\n            null\n          ],\n          \"infoCatalogs\": [\n            null\n          ],\n          \"licenseProcessingState\": {},\n          \"memberOf\": [\n            {}\n          ],\n          \"members\": [\n            {}\n          ],\n          \"membersWithLicenseErrors\": [\n            {}\n          ],\n          \"membershipRuleProcessingStatus\": {},\n          \"onPremisesProvisioningErrors\": [\n            {}\n          ],\n          \"onenote\": {\n            \"notebooks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.notebook\",\n                \"createdBy\": {},\n                \"lastModifiedBy\": {},\n                \"links\": {\n                  \"oneNoteClientUrl\": {},\n                  \"oneNoteWebUrl\": {}\n                },\n                \"sectionGroups\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.sectionGroup\",\n                    \"parentNotebook\": {},\n                    \"parentSectionGroup\": {},\n                    \"sectionGroups\": [\n                      {}\n                    ],\n                    \"sections\": [\n                      {\n                        \"@odata.type\": \"#microsoft.graph.onenoteSection\",\n                        \"links\": {\n                          \"oneNoteClientUrl\": {},\n                          \"oneNoteWebUrl\": {}\n                        },\n                        \"pages\": [\n                          {\n                            \"@odata.type\": \"#microsoft.graph.onenotePage\",\n                            \"links\": {\n                              \"oneNoteClientUrl\": {},\n                              \"oneNoteWebUrl\": {}\n                            },\n                            \"parentNotebook\": {},\n                            \"parentSection\": {},\n                            \"userTags\": [\n                              null\n                            ]\n                          }\n                        ],\n                        \"parentNotebook\": {},\n                        \"parentSectionGroup\": {}\n                      }\n                    ]\n                  }\n                ],\n                \"sections\": [\n                  {}\n                ]\n              }\n            ],\n            \"operations\": [\n              {\n                \"error\": {}\n              }\n            ],\n            \"pages\": [\n              {}\n            ],\n            \"resources\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.onenoteResource\"\n              }\n            ],\n            \"sectionGroups\": [\n              {}\n            ],\n            \"sections\": [\n              {}\n            ]\n          },\n          \"owners\": [\n            {}\n          ],\n          \"permissionGrants\": [\n            {}\n          ],\n          \"photo\": {},\n          \"photos\": [\n            {}\n          ],\n          \"planner\": {\n            \"plans\": [\n              {\n                \"buckets\": [\n                  {\n                    \"creationSource\": {},\n                    \"tasks\": [\n                      {\n                        \"appliedCategories\": {},\n                        \"assignedToTaskBoardFormat\": {\n                          \"orderHintsByAssignee\": {}\n                        },\n                        \"assignments\": {},\n                        \"bucketTaskBoardFormat\": {},\n                        \"completedBy\": {},\n                        \"createdBy\": {},\n                        \"creationSource\": {\n                          \"creationSourceKind\": {},\n                          \"teamsPublicationInfo\": {\n                            \"@odata.type\": \"#microsoft.graph.plannerTeamsPublicationInfo\"\n                          }\n                        },\n                        \"details\": {\n                          \"checklist\": {},\n                          \"notes\": {},\n                          \"references\": {}\n                        },\n                        \"previewType\": {},\n                        \"progressTaskBoardFormat\": {},\n                        \"recurrence\": {\n                          \"schedule\": {\n                            \"pattern\": {}\n                          }\n                        }\n                      }\n                    ]\n                  }\n                ],\n                \"container\": {},\n                \"contexts\": {},\n                \"createdBy\": {},\n                \"creationSource\": {\n                  \"creationSourceKind\": {}\n                },\n                \"details\": {\n                  \"categoryDescriptions\": {},\n                  \"contextDetails\": {},\n                  \"sharedWith\": {}\n                },\n                \"sharedWithContainers\": [\n                  {\n                    \"@odata.type\": \"#microsoft.graph.plannerSharedWithContainer\"\n                  }\n                ],\n                \"tasks\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"proxyAddresses\": [\n            null\n          ],\n          \"rejectedSenders\": [\n            {}\n          ],\n          \"resourceBehaviorOptions\": [\n            null\n          ],\n          \"resourceProvisioningOptions\": [\n            null\n          ],\n          \"settings\": [\n            {\n              \"values\": [\n                {}\n              ]\n            }\n          ],\n          \"sites\": [\n            {}\n          ],\n          \"team\": {\n            \"allChannels\": [\n              {\n                \"filesFolder\": {},\n                \"members\": [\n                  {}\n                ],\n                \"messages\": [\n                  {}\n                ],\n                \"moderationSettings\": {},\n                \"sharedWithTeams\": [\n                  {\n                    \"team\": {},\n                    \"allowedMembers\": [\n                      {}\n                    ]\n                  }\n                ],\n                \"summary\": {},\n                \"tabs\": [\n                  {}\n                ]\n              }\n            ],\n            \"channels\": [\n              {}\n            ],\n            \"discoverySettings\": {},\n            \"funSettings\": {},\n            \"group\": {},\n            \"guestSettings\": {},\n            \"incomingChannels\": [\n              {}\n            ],\n            \"installedApps\": [\n              {}\n            ],\n            \"memberSettings\": {},\n            \"members\": [\n              {}\n            ],\n            \"messagingSettings\": {},\n            \"operations\": [\n              {}\n            ],\n            \"owners\": [\n              {}\n            ],\n            \"permissionGrants\": [\n              {}\n            ],\n            \"photo\": {},\n            \"primaryChannel\": {},\n            \"schedule\": {\n              \"offerShiftRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.offerShiftRequest\",\n                  \"createdBy\": {},\n                  \"lastModifiedBy\": {}\n                }\n              ],\n              \"openShiftChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShiftChangeRequest\"\n                }\n              ],\n              \"openShifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.openShift\",\n                  \"draftOpenShift\": {\n                    \"@odata.type\": \"#microsoft.graph.openShiftItem\",\n                    \"activities\": [\n                      {\n                        \"theme\": {}\n                      }\n                    ]\n                  },\n                  \"sharedOpenShift\": {}\n                }\n              ],\n              \"provisionStatus\": {},\n              \"schedulingGroups\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.schedulingGroup\",\n                  \"userIds\": [\n                    null\n                  ]\n                }\n              ],\n              \"shifts\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.shift\",\n                  \"draftShift\": {},\n                  \"sharedShift\": {}\n                }\n              ],\n              \"swapShiftsChangeRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.swapShiftsChangeRequest\"\n                }\n              ],\n              \"timeCards\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeCard\",\n                  \"breaks\": [\n                    {\n                      \"end\": {\n                        \"notes\": {}\n                      },\n                      \"notes\": {},\n                      \"start\": {}\n                    }\n                  ],\n                  \"clockInEvent\": {},\n                  \"clockOutEvent\": {},\n                  \"notes\": {},\n                  \"originalEntry\": {\n                    \"breaks\": [\n                      {}\n                    ],\n                    \"clockInEvent\": {},\n                    \"clockOutEvent\": {}\n                  }\n                }\n              ],\n              \"timeClockSettings\": {\n                \"approvedLocation\": {}\n              },\n              \"timeOffReasons\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffReason\"\n                }\n              ],\n              \"timeOffRequests\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOffRequest\"\n                }\n              ],\n              \"timesOff\": [\n                {\n                  \"@odata.type\": \"#microsoft.graph.timeOff\",\n                  \"draftTimeOff\": {},\n                  \"sharedTimeOff\": {}\n                }\n              ],\n              \"workforceIntegrationIds\": [\n                null\n              ]\n            },\n            \"summary\": {},\n            \"tags\": [\n              {\n                \"members\": [\n                  {}\n                ]\n              }\n            ],\n            \"template\": {},\n            \"templateDefinition\": {\n              \"categories\": [\n                null\n              ],\n              \"lastModifiedBy\": {},\n              \"teamDefinition\": {}\n            }\n          },\n          \"threads\": [\n            {}\n          ],\n          \"transitiveMemberOf\": [\n            {}\n          ],\n          \"transitiveMembers\": [\n            {}\n          ],\n          \"writebackConfiguration\": {}\n        }\n      ],\n      \"joinedTeams\": [\n        {}\n      ],\n      \"licenseAssignmentStates\": [\n        {\n          \"disabledPlans\": [\n            null\n          ]\n        }\n      ],\n      \"licenseDetails\": [\n        {}\n      ],\n      \"mailFolders\": [\n        {\n          \"childFolders\": [\n            {}\n          ],\n          \"messageRules\": [\n            {\n              \"actions\": {\n                \"assignCategories\": [\n                  null\n                ],\n                \"forwardAsAttachmentTo\": [\n                  {}\n                ],\n                \"forwardTo\": [\n                  {}\n                ],\n                \"markImportance\": {},\n                \"redirectTo\": [\n                  {}\n                ]\n              },\n              \"conditions\": {\n                \"bodyContains\": [\n                  null\n                ],\n                \"bodyOrSubjectContains\": [\n                  null\n                ],\n                \"categories\": [\n                  null\n                ],\n                \"fromAddresses\": [\n                  {}\n                ],\n                \"headerContains\": [\n                  null\n                ],\n                \"importance\": {},\n                \"recipientContains\": [\n                  null\n                ],\n                \"senderContains\": [\n                  null\n                ],\n                \"sensitivity\": {},\n                \"sentToAddresses\": [\n                  {}\n                ],\n                \"subjectContains\": [\n                  null\n                ],\n                \"withinSizeRange\": {}\n              },\n              \"exceptions\": {}\n            }\n          ],\n          \"messages\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.message\",\n              \"attachments\": [\n                {}\n              ],\n              \"bccRecipients\": [\n                {}\n              ],\n              \"body\": {},\n              \"ccRecipients\": [\n                {}\n              ],\n              \"extensions\": [\n                {}\n              ],\n              \"flag\": {},\n              \"from\": {},\n              \"importance\": {},\n              \"inferenceClassification\": {},\n              \"internetMessageHeaders\": [\n                {}\n              ],\n              \"mentions\": [\n                {}\n              ],\n              \"mentionsPreview\": {},\n              \"multiValueExtendedProperties\": [\n                {}\n              ],\n              \"replyTo\": [\n                {}\n              ],\n              \"sender\": {},\n              \"singleValueExtendedProperties\": [\n                {}\n              ],\n              \"toRecipients\": [\n                {}\n              ],\n              \"uniqueBody\": {},\n              \"unsubscribeData\": [\n                null\n              ]\n            }\n          ],\n          \"multiValueExtendedProperties\": [\n            {}\n          ],\n          \"singleValueExtendedProperties\": [\n            {}\n          ],\n          \"userConfigurations\": [\n            {}\n          ]\n        }\n      ],\n      \"mailboxSettings\": {\n        \"automaticRepliesSetting\": {\n          \"scheduledEndDateTime\": {},\n          \"scheduledStartDateTime\": {}\n        },\n        \"language\": {},\n        \"workingHours\": {\n          \"daysOfWeek\": [\n            {}\n          ],\n          \"timeZone\": {}\n        }\n      },\n      \"managedAppRegistrations\": [\n        {\n          \"appIdentifier\": {},\n          \"appliedPolicies\": [\n            {\n              \"roleScopeTagIds\": [\n                null\n              ]\n            }\n          ],\n          \"flaggedReasons\": [\n            null\n          ],\n          \"intendedPolicies\": [\n            {}\n          ],\n          \"operations\": [\n            {}\n          ]\n        }\n      ],\n      \"managedDevices\": [\n        {\n          \"assignmentFilterEvaluationStatusDetails\": [\n            {}\n          ],\n          \"chromeOSDeviceInfo\": [\n            {}\n          ],\n          \"cloudPcRemoteActionResults\": [\n            {}\n          ],\n          \"configurationManagerClientEnabledFeatures\": {},\n          \"configurationManagerClientHealthState\": {},\n          \"configurationManagerClientInformation\": {},\n          \"detectedApps\": [\n            {\n              \"managedDevices\": [\n                {}\n              ]\n            }\n          ],\n          \"deviceActionResults\": [\n            {\n              \"actionState\": {}\n            }\n          ],\n          \"deviceCategory\": {\n            \"roleScopeTagIds\": [\n              null\n            ]\n          },\n          \"deviceCompliancePolicyStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"deviceHealthAttestationState\": {},\n          \"deviceHealthScriptStates\": [\n            {\n              \"assignmentFilterIds\": [\n                null\n              ]\n            }\n          ],\n          \"hardwareInformation\": {\n            \"sharedDeviceCachedUsers\": [\n              {}\n            ],\n            \"wiredIPv4Addresses\": [\n              null\n            ]\n          },\n          \"logCollectionRequests\": [\n            {}\n          ],\n          \"managedDeviceMobileAppConfigurationStates\": [\n            {\n              \"platformType\": {},\n              \"settingStates\": [\n                {\n                  \"sources\": [\n                    {}\n                  ],\n                  \"state\": {}\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"roleScopeTagIds\": [\n            null\n          ],\n          \"securityBaselineStates\": [\n            {\n              \"settingStates\": [\n                {\n                  \"contributingPolicies\": [\n                    {}\n                  ],\n                  \"sourcePolicies\": [\n                    {}\n                  ]\n                }\n              ],\n              \"state\": {}\n            }\n          ],\n          \"users\": [\n            {}\n          ],\n          \"usersLoggedOn\": [\n            {}\n          ],\n          \"windowsProtectionState\": {\n            \"detectedMalwareState\": [\n              {}\n            ]\n          }\n        }\n      ],\n      \"manager\": {},\n      \"memberOf\": [\n        {}\n      ],\n      \"messages\": [\n        {}\n      ],\n      \"mobileAppIntentAndStates\": [\n        {\n          \"mobileAppList\": [\n            {\n              \"supportedDeviceTypes\": [\n                {\n                  \"type\": {}\n                }\n              ]\n            }\n          ]\n        }\n      ],\n      \"mobileAppTroubleshootingEvents\": [\n        {\n          \"appLogCollectionRequests\": [\n            {\n              \"customLogFolders\": [\n                null\n              ]\n            }\n          ],\n          \"history\": [\n            {\n              \"troubleshootingErrorDetails\": {}\n            }\n          ]\n        }\n      ],\n      \"notifications\": [\n        {\n          \"payload\": {\n            \"visualContent\": {}\n          },\n          \"targetPolicy\": {\n            \"platformTypes\": [\n              null\n            ]\n          }\n        }\n      ],\n      \"oauth2PermissionGrants\": [\n        {}\n      ],\n      \"onPremisesExtensionAttributes\": {},\n      \"onPremisesProvisioningErrors\": [\n        {}\n      ],\n      \"onenote\": {},\n      \"onlineMeetings\": [\n        {\n          \"anonymizeIdentityForRoles\": [\n            null\n          ],\n          \"attendanceReports\": [\n            {\n              \"attendanceRecords\": [\n                {\n                  \"attendanceIntervals\": [\n                    {}\n                  ],\n                  \"identity\": {}\n                }\n              ]\n            }\n          ],\n          \"audioConferencing\": {\n            \"tollFreeNumbers\": [\n              null\n            ],\n            \"tollNumbers\": [\n              null\n            ]\n          },\n          \"broadcastSettings\": {\n            \"captions\": {\n              \"translationLanguages\": [\n                null\n              ]\n            }\n          },\n          \"capabilities\": [\n            null\n          ],\n          \"chatInfo\": {},\n          \"joinInformation\": {},\n          \"joinMeetingIdSettings\": {},\n          \"lobbyBypassSettings\": {},\n          \"meetingAttendanceReport\": {},\n          \"participants\": {\n            \"attendees\": [\n              {\n                \"identity\": {},\n                \"role\": {}\n              }\n            ],\n            \"contributors\": [\n              {}\n            ],\n            \"organizer\": {},\n            \"producers\": [\n              {}\n            ]\n          },\n          \"registration\": {\n            \"@odata.type\": \"#microsoft.graph.meetingRegistration\",\n            \"registrants\": [\n              {}\n            ],\n            \"customQuestions\": [\n              {\n                \"answerOptions\": [\n                  null\n                ]\n              }\n            ],\n            \"speakers\": [\n              {}\n            ]\n          },\n          \"transcripts\": [\n            {}\n          ],\n          \"virtualAppointment\": {\n            \"appointmentClients\": [\n              {}\n            ],\n            \"settings\": {}\n          },\n          \"watermarkProtection\": {}\n        }\n      ],\n      \"otherMails\": [\n        null\n      ],\n      \"outlook\": {\n        \"masterCategories\": [\n          {}\n        ],\n        \"taskFolders\": [\n          {\n            \"multiValueExtendedProperties\": [\n              {}\n            ],\n            \"singleValueExtendedProperties\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.outlookTask\",\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"importance\": {},\n                \"multiValueExtendedProperties\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"sensitivity\": {},\n                \"singleValueExtendedProperties\": [\n                  {}\n                ],\n                \"startDateTime\": {}\n              }\n            ]\n          }\n        ],\n        \"taskGroups\": [\n          {\n            \"taskFolders\": [\n              {}\n            ]\n          }\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"ownedDevices\": [\n        {}\n      ],\n      \"ownedObjects\": [\n        {}\n      ],\n      \"passwordProfile\": {},\n      \"pastProjects\": [\n        null\n      ],\n      \"pendingAccessReviewInstances\": [\n        {\n          \"contactedReviewers\": [\n            {}\n          ],\n          \"decisions\": [\n            {\n              \"appliedBy\": {\n                \"@odata.type\": \"#microsoft.graph.userIdentity\"\n              },\n              \"insights\": [\n                {}\n              ],\n              \"instance\": {},\n              \"principal\": {},\n              \"principalResourceMembership\": {},\n              \"resource\": {},\n              \"reviewedBy\": {},\n              \"target\": {}\n            }\n          ],\n          \"definition\": {\n            \"additionalNotificationRecipients\": [\n              {\n                \"notificationRecipientScope\": {}\n              }\n            ],\n            \"backupReviewers\": [\n              {\n                \"@odata.type\": \"#microsoft.graph.accessReviewReviewerScope\"\n              }\n            ],\n            \"createdBy\": {},\n            \"fallbackReviewers\": [\n              {}\n            ],\n            \"instanceEnumerationScope\": {},\n            \"instances\": [\n              {}\n            ],\n            \"reviewers\": [\n              {}\n            ],\n            \"scope\": {},\n            \"settings\": {\n              \"applyActions\": [\n                {}\n              ],\n              \"recommendationInsightSettings\": [\n                {}\n              ],\n              \"recurrence\": {}\n            },\n            \"stageSettings\": [\n              {\n                \"decisionsThatWillMoveToNextStage\": [\n                  null\n                ],\n                \"dependsOn\": [\n                  null\n                ],\n                \"fallbackReviewers\": [\n                  {}\n                ],\n                \"recommendationInsightSettings\": [\n                  {}\n                ],\n                \"reviewers\": [\n                  {}\n                ]\n              }\n            ]\n          },\n          \"errors\": [\n            {\n              \"@odata.type\": \"#microsoft.graph.accessReviewError\"\n            }\n          ],\n          \"fallbackReviewers\": [\n            {}\n          ],\n          \"reviewers\": [\n            {}\n          ],\n          \"scope\": {},\n          \"stages\": [\n            {\n              \"decisions\": [\n                {}\n              ],\n              \"fallbackReviewers\": [\n                {}\n              ],\n              \"reviewers\": [\n                {}\n              ]\n            }\n          ]\n        }\n      ],\n      \"people\": [\n        {\n          \"emailAddresses\": [\n            {}\n          ],\n          \"phones\": [\n            {}\n          ],\n          \"postalAddresses\": [\n            {}\n          ],\n          \"sources\": [\n            {}\n          ],\n          \"websites\": [\n            {}\n          ]\n        }\n      ],\n      \"photo\": {},\n      \"photos\": [\n        {}\n      ],\n      \"planner\": {\n        \"all\": [\n          {}\n        ],\n        \"favoritePlanReferences\": {},\n        \"favoritePlans\": [\n          {}\n        ],\n        \"plans\": [\n          {}\n        ],\n        \"recentPlanReferences\": {},\n        \"recentPlans\": [\n          {}\n        ],\n        \"rosterPlans\": [\n          {}\n        ],\n        \"tasks\": [\n          {}\n        ]\n      },\n      \"presence\": {\n        \"outOfOfficeSettings\": {},\n        \"statusMessage\": {\n          \"expiryDateTime\": {},\n          \"message\": {}\n        }\n      },\n      \"print\": {\n        \"recentPrinterShares\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.printerShare\",\n            \"capabilities\": {\n              \"bottomMargins\": [\n                null\n              ],\n              \"colorModes\": [\n                null\n              ],\n              \"contentTypes\": [\n                null\n              ],\n              \"copiesPerJob\": {},\n              \"dpis\": [\n                null\n              ],\n              \"duplexModes\": [\n                null\n              ],\n              \"feedDirections\": [\n                null\n              ],\n              \"feedOrientations\": [\n                null\n              ],\n              \"finishings\": [\n                null\n              ],\n              \"inputBins\": [\n                null\n              ],\n              \"leftMargins\": [\n                null\n              ],\n              \"mediaColors\": [\n                null\n              ],\n              \"mediaSizes\": [\n                null\n              ],\n              \"mediaTypes\": [\n                null\n              ],\n              \"multipageLayouts\": [\n                null\n              ],\n              \"orientations\": [\n                null\n              ],\n              \"outputBins\": [\n                null\n              ],\n              \"pagesPerSheet\": [\n                null\n              ],\n              \"qualities\": [\n                null\n              ],\n              \"rightMargins\": [\n                null\n              ],\n              \"scalings\": [\n                null\n              ],\n              \"supportedColorConfigurations\": [\n                null\n              ],\n              \"supportedCopiesPerJob\": {},\n              \"supportedDocumentMimeTypes\": [\n                null\n              ],\n              \"supportedDuplexConfigurations\": [\n                null\n              ],\n              \"supportedFinishings\": [\n                {}\n              ],\n              \"supportedMediaColors\": [\n                null\n              ],\n              \"supportedMediaSizes\": [\n                null\n              ],\n              \"supportedMediaTypes\": [\n                null\n              ],\n              \"supportedOrientations\": [\n                {}\n              ],\n              \"supportedOutputBins\": [\n                null\n              ],\n              \"supportedPagesPerSheet\": {},\n              \"supportedPresentationDirections\": [\n                null\n              ],\n              \"supportedPrintQualities\": [\n                {}\n              ],\n              \"topMargins\": [\n                null\n              ]\n            },\n            \"defaults\": {\n              \"colorMode\": {},\n              \"duplexConfiguration\": {},\n              \"duplexMode\": {},\n              \"finishings\": [\n                {}\n              ],\n              \"multipageLayout\": {},\n              \"orientation\": {},\n              \"presentationDirection\": {},\n              \"printColorConfiguration\": {},\n              \"printQuality\": {},\n              \"quality\": {},\n              \"scaling\": {}\n            },\n            \"jobs\": [\n              {\n                \"configuration\": {\n                  \"colorMode\": {},\n                  \"duplexMode\": {},\n                  \"feedOrientation\": {},\n                  \"finishings\": [\n                    {}\n                  ],\n                  \"margin\": {},\n                  \"multipageLayout\": {},\n                  \"orientation\": {},\n                  \"pageRanges\": [\n                    {}\n                  ],\n                  \"quality\": {},\n                  \"scaling\": {}\n                },\n                \"createdBy\": {},\n                \"documents\": [\n                  {\n                    \"configuration\": {\n                      \"colorMode\": {},\n                      \"duplexMode\": {},\n                      \"feedDirection\": {},\n                      \"feedOrientation\": {},\n                      \"finishings\": [\n                        {}\n                      ],\n                      \"margin\": {},\n                      \"multipageLayout\": {},\n                      \"orientation\": {},\n                      \"pageRanges\": [\n                        {}\n                      ],\n                      \"quality\": {},\n                      \"scaling\": {}\n                    }\n                  }\n                ],\n                \"status\": {\n                  \"details\": [\n                    null\n                  ],\n                  \"state\": {}\n                },\n                \"tasks\": [\n                  {\n                    \"definition\": {\n                      \"createdBy\": {},\n                      \"tasks\": [\n                        {}\n                      ]\n                    },\n                    \"status\": {},\n                    \"trigger\": {\n                      \"definition\": {}\n                    }\n                  }\n                ]\n              }\n            ],\n            \"location\": {\n              \"organization\": [\n                null\n              ],\n              \"subdivision\": [\n                null\n              ],\n              \"subunit\": [\n                null\n              ]\n            },\n            \"status\": {\n              \"details\": [\n                null\n              ],\n              \"processingStateReasons\": [\n                null\n              ],\n              \"state\": {}\n            },\n            \"allowedGroups\": [\n              {}\n            ],\n            \"allowedUsers\": [\n              {}\n            ],\n            \"printer\": {\n              \"@odata.type\": \"#microsoft.graph.printer\",\n              \"connectors\": [\n                {\n                  \"deviceHealth\": {},\n                  \"location\": {}\n                }\n              ],\n              \"share\": {},\n              \"shares\": [\n                {}\n              ],\n              \"taskTriggers\": [\n                {}\n              ]\n            },\n            \"viewPoint\": {}\n          }\n        ]\n      },\n      \"profile\": {\n        \"account\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userAccountInformation\",\n            \"createdBy\": {},\n            \"inference\": {},\n            \"lastModifiedBy\": {},\n            \"source\": {\n              \"type\": [\n                null\n              ]\n            },\n            \"preferredLanguageTag\": {}\n          }\n        ],\n        \"addresses\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemAddress\",\n            \"detail\": {},\n            \"geoCoordinates\": {}\n          }\n        ],\n        \"anniversaries\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnualEvent\"\n          }\n        ],\n        \"awards\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAward\"\n          }\n        ],\n        \"certifications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personCertification\"\n          }\n        ],\n        \"educationalActivities\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.educationalActivity\",\n            \"institution\": {\n              \"location\": {}\n            },\n            \"program\": {\n              \"activities\": [\n                null\n              ],\n              \"awards\": [\n                null\n              ],\n              \"fieldsOfStudy\": [\n                null\n              ]\n            }\n          }\n        ],\n        \"emails\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemEmail\",\n            \"type\": {}\n          }\n        ],\n        \"interests\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personInterest\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"languages\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.languageProficiency\",\n            \"reading\": {},\n            \"spoken\": {},\n            \"written\": {}\n          }\n        ],\n        \"names\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personName\",\n            \"pronunciation\": {}\n          }\n        ],\n        \"notes\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personAnnotation\",\n            \"detail\": {}\n          }\n        ],\n        \"patents\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPatent\"\n          }\n        ],\n        \"phones\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPhone\",\n            \"type\": {}\n          }\n        ],\n        \"positions\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.workPosition\",\n            \"categories\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {\n              \"company\": {\n                \"address\": {}\n              }\n            },\n            \"manager\": {}\n          }\n        ],\n        \"projects\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.projectParticipation\",\n            \"categories\": [\n              null\n            ],\n            \"client\": {},\n            \"collaborationTags\": [\n              null\n            ],\n            \"colleagues\": [\n              {}\n            ],\n            \"detail\": {},\n            \"sponsors\": [\n              {}\n            ]\n          }\n        ],\n        \"publications\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.itemPublication\"\n          }\n        ],\n        \"skills\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.skillProficiency\",\n            \"categories\": [\n              null\n            ],\n            \"collaborationTags\": [\n              null\n            ]\n          }\n        ],\n        \"webAccounts\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.webAccount\",\n            \"service\": {}\n          }\n        ],\n        \"websites\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.personWebsite\",\n            \"categories\": [\n              null\n            ]\n          }\n        ]\n      },\n      \"provisionedPlans\": [\n        {}\n      ],\n      \"proxyAddresses\": [\n        null\n      ],\n      \"registeredDevices\": [\n        {}\n      ],\n      \"responsibilities\": [\n        null\n      ],\n      \"schools\": [\n        null\n      ],\n      \"scopedRoleMemberOf\": [\n        {\n          \"roleMemberInfo\": {}\n        }\n      ],\n      \"security\": {\n        \"informationProtection\": {\n          \"labelPolicySettings\": {},\n          \"sensitivityLabels\": [\n            {\n              \"contentFormats\": [\n                null\n              ],\n              \"parent\": {}\n            }\n          ]\n        }\n      },\n      \"settings\": {\n        \"contactMergeSuggestions\": {},\n        \"itemInsights\": {},\n        \"regionalAndLanguageSettings\": {\n          \"authoringLanguages\": [\n            {}\n          ],\n          \"defaultDisplayLanguage\": {},\n          \"defaultRegionalFormat\": {},\n          \"defaultSpeechInputLanguage\": {},\n          \"defaultTranslationLanguage\": {},\n          \"regionalFormatOverrides\": {},\n          \"translationPreferences\": {\n            \"languageOverrides\": [\n              {}\n            ],\n            \"translationBehavior\": {},\n            \"untranslatedLanguages\": [\n              null\n            ]\n          }\n        },\n        \"shiftPreferences\": {\n          \"@odata.type\": \"#microsoft.graph.shiftPreferences\",\n          \"availability\": [\n            {\n              \"recurrence\": {},\n              \"timeSlots\": [\n                {}\n              ]\n            }\n          ]\n        }\n      },\n      \"signInActivity\": {},\n      \"skills\": [\n        null\n      ],\n      \"teamwork\": {\n        \"associatedTeams\": [\n          {}\n        ],\n        \"installedApps\": [\n          {\n            \"@odata.type\": \"#microsoft.graph.userScopeTeamsAppInstallation\",\n            \"chat\": {}\n          }\n        ]\n      },\n      \"todo\": {\n        \"lists\": [\n          {\n            \"extensions\": [\n              {}\n            ],\n            \"tasks\": [\n              {\n                \"attachmentSessions\": [\n                  {\n                    \"nextExpectedRanges\": [\n                      null\n                    ]\n                  }\n                ],\n                \"attachments\": [\n                  {}\n                ],\n                \"body\": {},\n                \"categories\": [\n                  null\n                ],\n                \"checklistItems\": [\n                  {}\n                ],\n                \"completedDateTime\": {},\n                \"dueDateTime\": {},\n                \"extensions\": [\n                  {}\n                ],\n                \"importance\": {},\n                \"linkedResources\": [\n                  {}\n                ],\n                \"recurrence\": {},\n                \"reminderDateTime\": {},\n                \"startDateTime\": {},\n                \"status\": {}\n              }\n            ]\n          }\n        ]\n      },\n      \"transitiveMemberOf\": [\n        {}\n      ],\n      \"transitiveReports\": [\n        {}\n      ],\n      \"usageRights\": [\n        {}\n      ],\n      \"windowsInformationProtectionDeviceRegistrations\": [\n        {}\n      ]\n    },\n    \"lastModifiedBy\": {},\n    \"lastModifiedByUser\": {},\n    \"parentReference\": {},\n    \"analytics\": {},\n    \"columns\": [\n      {}\n    ],\n    \"contentTypes\": [\n      {}\n    ],\n    \"deleted\": {},\n    \"drive\": {},\n    \"drives\": [\n      {}\n    ],\n    \"externalColumns\": [\n      {}\n    ],\n    \"informationProtection\": {},\n    \"items\": [\n      {}\n    ],\n    \"lists\": [\n      {}\n    ],\n    \"onenote\": {},\n    \"operations\": [\n      {}\n    ],\n    \"pages\": [\n      {\n        \"@odata.type\": \"#microsoft.graph.sitePage\",\n        \"canvasLayout\": {\n          \"horizontalSections\": [\n            {\n              \"columns\": [\n                {\n                  \"webparts\": [\n                    {}\n                  ]\n                }\n              ]\n            }\n          ],\n          \"verticalSection\": {\n            \"emphasis\": {},\n            \"webparts\": [\n              {}\n            ]\n          }\n        },\n        \"contentType\": {},\n        \"publishingState\": {},\n        \"reactions\": {},\n        \"titleArea\": {\n          \"serverProcessedContent\": {\n            \"componentDependencies\": [\n              {}\n            ],\n            \"customMetadata\": [\n              {\n                \"value\": {}\n              }\n            ],\n            \"htmlStrings\": [\n              {}\n            ],\n            \"imageSources\": [\n              {}\n            ],\n            \"links\": [\n              {}\n            ],\n            \"searchablePlainTexts\": [\n              {}\n            ]\n          }\n        },\n        \"webParts\": [\n          {}\n        ]\n      }\n    ],\n    \"permissions\": [\n      {}\n    ],\n    \"root\": {},\n    \"settings\": {},\n    \"sharepointIds\": {},\n    \"siteCollection\": {\n      \"root\": {}\n    },\n    \"sites\": [\n      {}\n    ],\n    \"termStore\": {\n      \"groups\": [\n        {}\n      ],\n      \"languageTags\": [\n        null\n      ],\n      \"sets\": [\n        {}\n      ]\n    }\n  }\n]",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Remove"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/microsoft.graph.addCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Add Copy"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/microsoft.graph.addCopyFromContentTypeHub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.associateWithHubSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Associate With Hub Sites"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Associate With Hub Sites"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.copyToDefaultContentLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Copy To Default Content Location"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Copy To Default Content Location"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Content Types Content Type Unpublish"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Evaluation Input",
			"name": "evaluationInput",
			"type": "json",
			"default": "{\n  \"currentLabel\": {},\n  \"discoveredSensitiveTypes\": [\n    {\n      \"classificationAttributes\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "evaluationInput",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Notification Info",
			"name": "notificationInfo",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notificationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/informationProtection/sensitivityLabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/microsoft.graph.addCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Add Copy"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/microsoft.graph.addCopyFromContentTypeHub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.associateWithHubSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Associate With Hub Sites"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Associate With Hub Sites"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.copyToDefaultContentLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Copy To Default Content Location"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Copy To Default Content Location"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Unpublish"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Document Set Versions Document Set Version Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/microsoft.graph.createLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/items/{listItem-id}/versions/{listItemVersion-id}/microsoft.graph.restoreVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Versions List Item Version Restore Version"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/lists/{list-id}/subscriptions/{subscription-id}/microsoft.graph.reauthorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Lists List Subscriptions Subscription Reauthorize"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/microsoft.graph.getNotebookFromWebUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Notebook From Web Url"
					]
				}
			}
		},
		{
			"displayName": "Web Url",
			"name": "webUrl",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "webUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Notebook From Web Url"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/microsoft.graph.copyNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Notebook Folder",
			"name": "notebookFolder",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notebookFolder",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Copy Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/microsoft.graph.copyToNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Notebook"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/microsoft.graph.copyToSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Rename As",
			"name": "renameAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "renameAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Copy To Section Group"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.copyToSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "groupId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "groupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Collection Id",
			"name": "siteCollectionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteCollectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "siteId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "siteId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Copy To Section"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.onenotePatchContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "Commands",
			"name": "commands",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "commands",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Onenote Patch Content"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}/microsoft.graph.getPositionOfWebPart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Canvas Layout Horizontal Sections Horizontal Section Columns Horizontal Section Column Webparts Web Part Get Position Of Web Part"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts/{webPart-id}/microsoft.graph.getPositionOfWebPart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Canvas Layout Vertical Section Webparts Web Part Get Position Of Web Part"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/microsoft.graph.getWebPartsByPosition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Column Id",
			"name": "columnId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "columnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Horizontal Section Id",
			"name": "horizontalSectionId",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "horizontalSectionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Is In Vertical Section",
			"name": "isInVerticalSection",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "isInVerticalSection",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "Web Part Index",
			"name": "webPartIndex",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "webPartIndex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Get Web Parts By Position"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/webParts/{webPart-id}/microsoft.graph.getPositionOfWebPart",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Pages Site Page Web Parts Web Part Get Position Of Web Part"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/permissions/{permission-id}/microsoft.graph.grant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Permissions Permission Grant"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Permissions Permission Grant"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/permissions/{permission-id}/microsoft.graph.revokeGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Actions"
					],
					"operation": [
						"Sites Site Permissions Permission Revoke Grants"
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
						"Sites Actions"
					],
					"operation": [
						"Sites Site Permissions Permission Revoke Grants"
					]
				}
			}
		},
];
