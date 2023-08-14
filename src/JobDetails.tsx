import Chip from "./components/Chip";
import { JobListItemData } from "./JobListItem";
import Paper from "./components/Paper";
import LocationIcon from "/assets/location.svg";

const JobDetails = (props: { data: JobListItemData }) => {
    const { data } = props;
    const iconWidth: number = 65;
    const hoursSinceCreation = Math.round(
        (Date.now() - data.createdAt.getTime()) / (1000 * 60 * 60)
    );
    const daysSinceCreation = Math.round(hoursSinceCreation / 24);
    const postingStr =
        hoursSinceCreation < 1
            ? "just now"
            : hoursSinceCreation < 24
            ? `about ${hoursSinceCreation} hour${
                  hoursSinceCreation > 1 ? "s" : ""
              } ago`
            : `about ${daysSinceCreation} day${
                  daysSinceCreation > 1 ? "s" : ""
              } ago`;
    return (
        <Paper elevation="low">
            <div className="flex px-4 py-6">
                <div
                    style={{ width: `${iconWidth}px` }}
                    className="shrink-0 mr-4"
                >
                    <img
                        src={`./assets/${data.company.profileImgSrc}`}
                        className="rounded-md"
                    />
                </div>
                <div className="grow">
                    <span className="text-sm">
                        <span>{data.company.name}</span>
                        {data.company.rating && (
                            <span className="ml-4">
                                {data.company.rating} ★
                            </span>
                        )}
                    </span>
                    <div className="font-bold line-clamp-2">{data.title}</div>
                    <div className="flex items-center flex-wrap text-gray-500 text-sm">
                        <span>{postingStr}</span>
                        {data.location && (
                            <span className="ml-4 text-gray-500 inline-flex items-center">
                                <img
                                    src={LocationIcon}
                                    className="inline mr-1"
                                    width="10px"
                                />
                                {data.location}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            {data.techStack.length > 0 && (
                <div className="border-t border-gray-200 px-4 py-6">
                    <div className="font-bold mb-1">Tech Stacks</div>
                    <div className="flex flex-wrap gap-1">
                        {data.techStack.map((value, idx) => {
                            return (
                                <Chip
                                    label={value}
                                    color="neutral"
                                    fontType="mono"
                                    isBolded={true}
                                    key={idx}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            <div className="border-t border-gray-200 px-4 py-6">
                <div className="font-bold mb-3">Job Description</div>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Bibendum enim facilisis gravida neque convallis a
                    cras. Duis ultricies lacus sed turpis tincidunt id aliquet
                    risus. Id diam maecenas ultricies mi eget mauris. Lectus
                    proin nibh nisl condimentum id. Egestas egestas fringilla
                    phasellus faucibus. Purus gravida quis blandit turpis
                    cursus. Congue mauris rhoncus aenean vel elit scelerisque
                    mauris. Nibh venenatis cras sed felis eget velit aliquet
                    sagittis id. Netus et malesuada fames ac turpis. Pharetra
                    sit amet aliquam id diam. Sit amet commodo nulla facilisi
                    nullam. Nibh praesent tristique magna sit amet purus. Morbi
                    non arcu risus quis varius. Arcu odio ut sem nulla pharetra
                    diam sit. Iaculis nunc sed augue lacus viverra. Nibh mauris
                    cursus mattis molestie a. Tortor condimentum lacinia quis
                    vel eros donec ac odio. Proin sagittis nisl rhoncus mattis
                    rhoncus urna. Lectus arcu bibendum at varius vel. Pharetra
                    convallis posuere morbi leo urna. Ut sem nulla pharetra diam
                    sit amet nisl suscipit adipiscing. Ligula ullamcorper
                    malesuada proin libero nunc consequat interdum varius sit.
                    Eget duis at tellus at urna condimentum mattis. Neque vitae
                    tempus quam pellentesque nec. Odio aenean sed adipiscing
                    diam donec adipiscing tristique risus nec. Ipsum consequat
                    nisl vel pretium. At erat pellentesque adipiscing commodo
                    elit. Proin sagittis nisl rhoncus mattis rhoncus urna neque
                    viverra. Quam elementum pulvinar etiam non quam lacus
                    suspendisse faucibus interdum. Quam lacus suspendisse
                    faucibus interdum posuere lorem ipsum dolor. Quam adipiscing
                    vitae proin sagittis nisl rhoncus. Ut etiam sit amet nisl
                    purus in. Nunc pulvinar sapien et ligula ullamcorper
                    malesuada proin. Nibh ipsum consequat nisl vel pretium
                    lectus. Euismod elementum nisi quis eleifend quam adipiscing
                    vitae. Donec et odio pellentesque diam. Tellus id interdum
                    velit laoreet id donec. Viverra nibh cras pulvinar mattis
                    nunc sed blandit libero volutpat. Ut etiam sit amet nisl
                    purus in mollis. Sit amet volutpat consequat mauris nunc. Et
                    tortor at risus viverra. Ac tincidunt vitae semper quis
                    lectus nulla at volutpat. Nisl nisi scelerisque eu ultrices
                    vitae auctor. Eu turpis egestas pretium aenean pharetra
                    magna ac placerat. Venenatis lectus magna fringilla urna
                    porttitor. Porta non pulvinar neque laoreet suspendisse.
                    Viverra aliquet eget sit amet tellus cras adipiscing. Odio
                    pellentesque diam volutpat commodo sed egestas egestas
                    fringilla phasellus. Interdum consectetur libero id faucibus
                    nisl. Diam vel quam elementum pulvinar etiam. Sem nulla
                    pharetra diam sit amet nisl suscipit. Pellentesque
                    adipiscing commodo elit at imperdiet dui. Pretium viverra
                    suspendisse potenti nullam ac tortor. Suscipit adipiscing
                    bibendum est ultricies integer quis auctor. In fermentum et
                    sollicitudin ac orci phasellus egestas tellus. Ullamcorper a
                    lacus vestibulum sed arcu. Aliquam sem et tortor consequat
                    id porta nibh venenatis. Arcu ac tortor dignissim convallis
                    aenean. Sem integer vitae justo eget magna fermentum
                    iaculis. In hac habitasse platea dictumst quisque. Quis
                    hendrerit dolor magna eget est. Arcu non odio euismod
                    lacinia at. Nisl nunc mi ipsum faucibus vitae aliquet nec
                    ullamcorper sit. Sed odio morbi quis commodo odio aenean
                    sed. Molestie nunc non blandit massa enim nec dui. Cras
                    adipiscing enim eu turpis egestas. Molestie ac feugiat sed
                    lectus vestibulum mattis ullamcorper velit sed. Pellentesque
                    habitant morbi tristique senectus et. Est velit egestas dui
                    id ornare arcu odio ut sem. A condimentum vitae sapien
                    pellentesque. Rhoncus dolor purus non enim praesent
                    elementum. Nunc eget lorem dolor sed viverra ipsum nunc
                    aliquet. Vestibulum lectus mauris ultrices eros in. Nulla
                    posuere sollicitudin aliquam ultrices. Facilisis mauris sit
                    amet massa vitae tortor condimentum lacinia. Elit
                    pellentesque habitant morbi tristique senectus. Sit amet
                    luctus venenatis lectus magna fringilla urna porttitor.
                </span>
            </div>
        </Paper>
    );
};

export default JobDetails;
