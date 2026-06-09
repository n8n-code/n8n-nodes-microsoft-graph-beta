import type { INodeProperties } from 'n8n-workflow';

export const meOnenoteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Onenote",
					"value": "Me Delete Onenote",
					"action": "Delete navigation property onenote for me",
					"description": "Delete navigation property onenote for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote"
						}
					}
				},
				{
					"name": "Me Get Onenote",
					"value": "Me Get Onenote",
					"action": "Get onenote from me",
					"description": "Get onenote from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote"
						}
					}
				},
				{
					"name": "Me Update Onenote",
					"value": "Me Update Onenote",
					"action": "Update the navigation property onenote in me",
					"description": "Update the navigation property onenote in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote"
						}
					}
				},
				{
					"name": "Me Onenote List Notebooks",
					"value": "Me Onenote List Notebooks",
					"action": "List notebooks",
					"description": "Retrieve a list of notebook objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks"
						}
					}
				},
				{
					"name": "Me Onenote Create Notebooks",
					"value": "Me Onenote Create Notebooks",
					"action": "Create notebook",
					"description": "Create a new OneNote notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/notebooks"
						}
					}
				},
				{
					"name": "Me Onenote Delete Notebooks",
					"value": "Me Onenote Delete Notebooks",
					"action": "Delete navigation property notebooks for me",
					"description": "Delete navigation property notebooks for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Notebooks",
					"value": "Me Onenote Get Notebooks",
					"action": "Get notebooks from me",
					"description": "The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Update Notebooks",
					"value": "Me Onenote Update Notebooks",
					"action": "Update the navigation property notebooks in me",
					"description": "Update the navigation property notebooks in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks List Section Groups",
					"value": "Me Onenote Notebooks List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Create Section Groups",
					"value": "Me Onenote Notebooks Create Section Groups",
					"action": "Create sectionGroup",
					"description": "Create a new section group in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Delete Section Groups",
					"value": "Me Onenote Notebooks Delete Section Groups",
					"action": "Delete navigation property sectionGroups for me",
					"description": "Delete navigation property sectionGroups for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Get Section Groups",
					"value": "Me Onenote Notebooks Get Section Groups",
					"action": "Get sectionGroups from me",
					"description": "The section groups in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Update Section Groups",
					"value": "Me Onenote Notebooks Update Section Groups",
					"action": "Update the navigation property sectionGroups in me",
					"description": "Update the navigation property sectionGroups in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Get Parent Notebook",
					"value": "Me Onenote Notebooks Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Get Parent Section Group",
					"value": "Me Onenote Notebooks Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from me",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups List Section Groups",
					"value": "Me Onenote Notebooks Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Get Section Groups",
					"value": "Me Onenote Notebooks Section Groups Get Section Groups",
					"action": "Get sectionGroups from me",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups List Sections",
					"value": "Me Onenote Notebooks Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Create Sections",
					"value": "Me Onenote Notebooks Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Delete Sections",
					"value": "Me Onenote Notebooks Section Groups Delete Sections",
					"action": "Delete navigation property sections for me",
					"description": "Delete navigation property sections for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Get Sections",
					"value": "Me Onenote Notebooks Section Groups Get Sections",
					"action": "Get sections from me",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Update Sections",
					"value": "Me Onenote Notebooks Section Groups Update Sections",
					"action": "Update the navigation property sections in me",
					"description": "Update the navigation property sections in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections List Pages",
					"value": "Me Onenote Notebooks Section Groups Sections List Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Create Pages",
					"value": "Me Onenote Notebooks Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for me",
					"description": "Create new navigation property to pages for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Delete Pages",
					"value": "Me Onenote Notebooks Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for me",
					"description": "Delete navigation property pages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Get Pages",
					"value": "Me Onenote Notebooks Section Groups Sections Get Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Update Pages",
					"value": "Me Onenote Notebooks Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in me",
					"description": "Update the navigation property pages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Get Pages Content",
					"value": "Me Onenote Notebooks Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Update Pages Content",
					"value": "Me Onenote Notebooks Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"value": "Me Onenote Notebooks Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"value": "Me Onenote Notebooks Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from me",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"value": "Me Onenote Notebooks Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"value": "Me Onenote Notebooks Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from me",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks List Sections",
					"value": "Me Onenote Notebooks List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects from the specified notebook.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Create Sections",
					"value": "Me Onenote Notebooks Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified notebook.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Delete Sections",
					"value": "Me Onenote Notebooks Delete Sections",
					"action": "Delete navigation property sections for me",
					"description": "Delete navigation property sections for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Get Sections",
					"value": "Me Onenote Notebooks Get Sections",
					"action": "Get sections from me",
					"description": "The sections in the notebook. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Update Sections",
					"value": "Me Onenote Notebooks Update Sections",
					"action": "Update the navigation property sections in me",
					"description": "Update the navigation property sections in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections List Pages",
					"value": "Me Onenote Notebooks Sections List Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Create Pages",
					"value": "Me Onenote Notebooks Sections Create Pages",
					"action": "Create new navigation property to pages for me",
					"description": "Create new navigation property to pages for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Delete Pages",
					"value": "Me Onenote Notebooks Sections Delete Pages",
					"action": "Delete navigation property pages for me",
					"description": "Delete navigation property pages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Get Pages",
					"value": "Me Onenote Notebooks Sections Get Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Update Pages",
					"value": "Me Onenote Notebooks Sections Update Pages",
					"action": "Update the navigation property pages in me",
					"description": "Update the navigation property pages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Get Pages Content",
					"value": "Me Onenote Notebooks Sections Get Pages Content",
					"action": "Get content for the navigation property pages from me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Update Pages Content",
					"value": "Me Onenote Notebooks Sections Update Pages Content",
					"action": "Update content for the navigation property pages in me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Pages Get Parent Notebook",
					"value": "Me Onenote Notebooks Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Pages Get Parent Section",
					"value": "Me Onenote Notebooks Sections Pages Get Parent Section",
					"action": "Get parentSection from me",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Get Parent Notebook",
					"value": "Me Onenote Notebooks Sections Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Sections Get Parent Section Group",
					"value": "Me Onenote Notebooks Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from me",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Me Onenote List Operations",
					"value": "Me Onenote List Operations",
					"action": "Get operations from me",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/operations"
						}
					}
				},
				{
					"name": "Me Onenote Create Operations",
					"value": "Me Onenote Create Operations",
					"action": "Create new navigation property to operations for me",
					"description": "Create new navigation property to operations for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/operations"
						}
					}
				},
				{
					"name": "Me Onenote Delete Operations",
					"value": "Me Onenote Delete Operations",
					"action": "Delete navigation property operations for me",
					"description": "Delete navigation property operations for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Operations",
					"value": "Me Onenote Get Operations",
					"action": "Get operations from me",
					"description": "The status of OneNote operations. Getting an operations collection is not supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Update Operations",
					"value": "Me Onenote Update Operations",
					"action": "Update the navigation property operations in me",
					"description": "Update the navigation property operations in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/operations/{{$parameter[\"onenoteOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote List Pages",
					"value": "Me Onenote List Pages",
					"action": "Get pages from me",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/pages"
						}
					}
				},
				{
					"name": "Me Onenote Create Pages",
					"value": "Me Onenote Create Pages",
					"action": "Create new navigation property to pages for me",
					"description": "Create new navigation property to pages for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/pages"
						}
					}
				},
				{
					"name": "Me Onenote Delete Pages",
					"value": "Me Onenote Delete Pages",
					"action": "Delete navigation property pages for me",
					"description": "Delete navigation property pages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Pages",
					"value": "Me Onenote Get Pages",
					"action": "Get pages from me",
					"description": "The pages in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Update Pages",
					"value": "Me Onenote Update Pages",
					"action": "Update the navigation property pages in me",
					"description": "Update the navigation property pages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Pages Content",
					"value": "Me Onenote Get Pages Content",
					"action": "Get content for the navigation property pages from me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Update Pages Content",
					"value": "Me Onenote Update Pages Content",
					"action": "Update content for the navigation property pages in me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Pages Get Parent Notebook",
					"value": "Me Onenote Pages Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Pages Get Parent Section",
					"value": "Me Onenote Pages Get Parent Section",
					"action": "Get parentSection from me",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Me Onenote List Resources",
					"value": "Me Onenote List Resources",
					"action": "Get resources from me",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/resources"
						}
					}
				},
				{
					"name": "Me Onenote Create Resources",
					"value": "Me Onenote Create Resources",
					"action": "Create new navigation property to resources for me",
					"description": "Create new navigation property to resources for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/resources"
						}
					}
				},
				{
					"name": "Me Onenote Delete Resources",
					"value": "Me Onenote Delete Resources",
					"action": "Delete navigation property resources for me",
					"description": "Delete navigation property resources for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Resources",
					"value": "Me Onenote Get Resources",
					"action": "Get resources from me",
					"description": "The image and other file resources in OneNote pages. Getting a resources collection is not supported, but you can get the binary content of a specific resource. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Update Resources",
					"value": "Me Onenote Update Resources",
					"action": "Update the navigation property resources in me",
					"description": "Update the navigation property resources in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Resources Content",
					"value": "Me Onenote Get Resources Content",
					"action": "Get content for the navigation property resources from me",
					"description": "Get content for the navigation property resources from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Update Resources Content",
					"value": "Me Onenote Update Resources Content",
					"action": "Update content for the navigation property resources in me",
					"description": "Update content for the navigation property resources in me",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onenote/resources/{{$parameter[\"onenoteResource-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote List Section Groups",
					"value": "Me Onenote List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of sectionGroup objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Me Onenote Create Section Groups",
					"value": "Me Onenote Create Section Groups",
					"action": "Create new navigation property to sectionGroups for me",
					"description": "Create new navigation property to sectionGroups for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/sectionGroups"
						}
					}
				},
				{
					"name": "Me Onenote Delete Section Groups",
					"value": "Me Onenote Delete Section Groups",
					"action": "Delete navigation property sectionGroups for me",
					"description": "Delete navigation property sectionGroups for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Section Groups",
					"value": "Me Onenote Get Section Groups",
					"action": "Get sectionGroups from me",
					"description": "The section groups in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Update Section Groups",
					"value": "Me Onenote Update Section Groups",
					"action": "Update the navigation property sectionGroups in me",
					"description": "Update the navigation property sectionGroups in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Get Parent Notebook",
					"value": "Me Onenote Section Groups Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Get Parent Section Group",
					"value": "Me Onenote Section Groups Get Parent Section Group",
					"action": "Get parentSectionGroup from me",
					"description": "The section group that contains the section group. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups List Section Groups",
					"value": "Me Onenote Section Groups List Section Groups",
					"action": "List sectionGroups",
					"description": "Retrieve a list of section groups from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Get Section Groups",
					"value": "Me Onenote Section Groups Get Section Groups",
					"action": "Get sectionGroups from me",
					"description": "The section groups in the section. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id1\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups List Sections",
					"value": "Me Onenote Section Groups List Sections",
					"action": "List sections",
					"description": "Retrieve a list of onenoteSection objects from the specified section group.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Create Sections",
					"value": "Me Onenote Section Groups Create Sections",
					"action": "Create section",
					"description": "Create a new section in the specified section group.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Delete Sections",
					"value": "Me Onenote Section Groups Delete Sections",
					"action": "Delete navigation property sections for me",
					"description": "Delete navigation property sections for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Get Sections",
					"value": "Me Onenote Section Groups Get Sections",
					"action": "Get sections from me",
					"description": "The sections in the section group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Update Sections",
					"value": "Me Onenote Section Groups Update Sections",
					"action": "Update the navigation property sections in me",
					"description": "Update the navigation property sections in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections List Pages",
					"value": "Me Onenote Section Groups Sections List Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Create Pages",
					"value": "Me Onenote Section Groups Sections Create Pages",
					"action": "Create new navigation property to pages for me",
					"description": "Create new navigation property to pages for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Delete Pages",
					"value": "Me Onenote Section Groups Sections Delete Pages",
					"action": "Delete navigation property pages for me",
					"description": "Delete navigation property pages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Get Pages",
					"value": "Me Onenote Section Groups Sections Get Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Update Pages",
					"value": "Me Onenote Section Groups Sections Update Pages",
					"action": "Update the navigation property pages in me",
					"description": "Update the navigation property pages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Get Pages Content",
					"value": "Me Onenote Section Groups Sections Get Pages Content",
					"action": "Get content for the navigation property pages from me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Update Pages Content",
					"value": "Me Onenote Section Groups Sections Update Pages Content",
					"action": "Update content for the navigation property pages in me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Pages Get Parent Notebook",
					"value": "Me Onenote Section Groups Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Pages Get Parent Section",
					"value": "Me Onenote Section Groups Sections Pages Get Parent Section",
					"action": "Get parentSection from me",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Get Parent Notebook",
					"value": "Me Onenote Section Groups Sections Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Sections Get Parent Section Group",
					"value": "Me Onenote Section Groups Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from me",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				},
				{
					"name": "Me Onenote List Sections",
					"value": "Me Onenote List Sections",
					"action": "List sections",
					"description": "Retrieve a list of section objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections"
						}
					}
				},
				{
					"name": "Me Onenote Create Sections",
					"value": "Me Onenote Create Sections",
					"action": "Create new navigation property to sections for me",
					"description": "Create new navigation property to sections for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/sections"
						}
					}
				},
				{
					"name": "Me Onenote Delete Sections",
					"value": "Me Onenote Delete Sections",
					"action": "Delete navigation property sections for me",
					"description": "Delete navigation property sections for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Get Sections",
					"value": "Me Onenote Get Sections",
					"action": "Get sections from me",
					"description": "The sections in all OneNote notebooks that are owned by the user or group.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Update Sections",
					"value": "Me Onenote Update Sections",
					"action": "Update the navigation property sections in me",
					"description": "Update the navigation property sections in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Sections List Pages",
					"value": "Me Onenote Sections List Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Sections Create Pages",
					"value": "Me Onenote Sections Create Pages",
					"action": "Create new navigation property to pages for me",
					"description": "Create new navigation property to pages for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Me Onenote Sections Delete Pages",
					"value": "Me Onenote Sections Delete Pages",
					"action": "Delete navigation property pages for me",
					"description": "Delete navigation property pages for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Sections Get Pages",
					"value": "Me Onenote Sections Get Pages",
					"action": "Get pages from me",
					"description": "The collection of pages in the section.  Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Sections Update Pages",
					"value": "Me Onenote Sections Update Pages",
					"action": "Update the navigation property pages in me",
					"description": "Update the navigation property pages in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}"
						}
					}
				},
				{
					"name": "Me Onenote Sections Get Pages Content",
					"value": "Me Onenote Sections Get Pages Content",
					"action": "Get content for the navigation property pages from me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Sections Update Pages Content",
					"value": "Me Onenote Sections Update Pages Content",
					"action": "Update content for the navigation property pages in me",
					"description": "The page's HTML content.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/content"
						}
					}
				},
				{
					"name": "Me Onenote Sections Pages Get Parent Notebook",
					"value": "Me Onenote Sections Pages Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the page.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Sections Pages Get Parent Section",
					"value": "Me Onenote Sections Pages Get Parent Section",
					"action": "Get parentSection from me",
					"description": "The section that contains the page. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/parentSection"
						}
					}
				},
				{
					"name": "Me Onenote Sections Get Parent Notebook",
					"value": "Me Onenote Sections Get Parent Notebook",
					"action": "Get parentNotebook from me",
					"description": "The notebook that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentNotebook"
						}
					}
				},
				{
					"name": "Me Onenote Sections Get Parent Section Group",
					"value": "Me Onenote Sections Get Parent Section Group",
					"action": "Get parentSectionGroup from me",
					"description": "The section group that contains the section.  Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/parentSectionGroup"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Delete Onenote"
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
						"Me Onenote"
					],
					"operation": [
						"Me Delete Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Get Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Update Onenote"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Notebooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Notebooks"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Delete Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Delete Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Delete Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Delete Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Delete Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Notebooks Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Operations"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/operations/{onenoteOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/operations/{onenoteOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/resources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/resources<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Resources"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Resources"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/resources/{onenoteResource-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/resources/{onenoteResource-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Resources"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/resources/{onenoteResource-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/resources/{onenoteResource-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Resources Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sectionGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Section Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sectionGroups/{sectionGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sectionGroups/{sectionGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sectionGroups/{sectionGroup-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Section Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sectionGroups/{sectionGroup-id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sectionGroups/{sectionGroup-id}/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Delete Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Delete Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Section Groups Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote List Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Create Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Sections"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Delete Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Get Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sections/{onenoteSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sections/{onenoteSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Update Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sections/{onenoteSection-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /me/onenote/sections/{onenoteSection-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Delete Pages"
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
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Update Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Update Pages Content"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Pages Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Pages Get Parent Section"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/parentNotebook",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Parent Notebook"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/parentSectionGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Onenote"
					],
					"operation": [
						"Me Onenote Sections Get Parent Section Group"
					]
				}
			}
		},
];
